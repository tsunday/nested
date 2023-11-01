import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppPort } from './app.port';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppPort,
      useClass: AppService,
    },
  ],
})
export class AppModule {}
