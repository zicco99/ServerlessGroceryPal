import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentService {
  constructor(private configService: ConfigService) {}

  get<T>(key: string) {
    return this.configService.get<T>(key);
  }
}
