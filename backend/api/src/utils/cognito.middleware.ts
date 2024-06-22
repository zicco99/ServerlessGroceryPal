import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';

declare module 'express' {
  interface Request {
    user?: {
      id: string;
      name: string;
      email: string;
      roles: string[];
      customAttribute?: string;
    };
  }
}

@Injectable()
export class CheckAuthCognitoMiddleware implements NestMiddleware {
  private client = new JwksClient({
    cache: true,
    jwksUri: `https://cognito-idp.${process.env.REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}/.well-known/jwks.json`,
  });

  async use(request: Request, response: Response, next: NextFunction) {
    if (!request.headers.authorization) {
      return response.status(401).send('Unauthorized');
    }

    try {
      const tokenBearer = request.headers.authorization.split(' ')[1];
      const decodedToken = jwt.decode(tokenBearer, { complete: true }) as jwt.Jwt;

      if (!decodedToken || !decodedToken.header) {
        throw new Error('Invalid token');
      }

      const { sub, name, email, 'cognito:groups': roles, 'custom:attribute': customAttribute } = await this.verifyToken(tokenBearer);

      request.user = { id: sub, name, email, roles, customAttribute };

      next();
    } catch (error) {
      console.error('Error validating token:', error);
      response.status(401).send('Unauthorized + ' + error);
    }
  }

  private async verifyToken(tokenBearer: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(
        tokenBearer,
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

  private getSigningKey(header: JwtHeader, callback: SigningKeyCallback) {
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
