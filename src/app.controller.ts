import { Controller, Get } from '@nestjs/common';
import { AppPort } from './app.port';

@Controller()
export class AppController {
  constructor(private readonly appService: AppPort) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
