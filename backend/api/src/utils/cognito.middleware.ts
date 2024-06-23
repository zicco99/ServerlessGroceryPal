import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';
import { stringify } from 'querystring';

@Injectable()
export class CheckAuthCognitoMiddleware implements NestMiddleware {
  private client: JwksClient;

  constructor() {
    const { REGION, COGNITO_USER_POOL_ID } = process.env;
    if (!REGION || !COGNITO_USER_POOL_ID) {
      throw new Error('Environment variables REGION and COGNITO_USER_POOL_ID are required');
    }
    this.client = new JwksClient({
      cache: true,
      jwksUri: `https://cognito-idp.${REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}/.well-known/jwks.json`,
    });
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send('Unauthorized: No token provided');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).send('Unauthorized: Malformed token');
    }

    try {
      const decodedToken = jwt.decode(token, { complete: true }) as jwt.Jwt;
      if (!decodedToken || !decodedToken.header) {
        throw new Error('Invalid token');
      }

      console.log('Decoded token:', decodedToken);

      const { sub, email, given_name, family_name } = await this.verifyToken(token);

      const user = { id: sub, email, firstname: given_name, lastname: family_name };
      console.log('User:', user);

      req.headers['x-user'] = stringify(user);
      next();
    } catch (error) {
      console.error('Error validating token:', error);
      res.status(401).send(`Unauthorized: ${error.message}`);
    }
  }

  private async verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        this.getSigningKey.bind(this),
        {
          audience: process.env.COGNITO_USER_POOL_CLIENT_ID,
          issuer: `https://cognito-idp.${process.env.REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
          algorithms: ['RS256'],
        },
        (error, decoded) => {
          if (error) {
            reject(error);
          } else {
            resolve(decoded);
          }
        }
      );
    });
  }

  private getSigningKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
    this.client.getSigningKey(header.kid as string, (error, key) => {
      if (error) {
        callback(error, undefined);
      } else {
        const signingKey = key?.getPublicKey();
        callback(null, signingKey);
      }
    });
  }
}
