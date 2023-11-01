import { Injectable } from '@nestjs/common';
import { AppPort } from './app.port';

@Injectable()
export class AppService extends AppPort {
  getHello(): string {
    return 'Hello World!';
  }
}
