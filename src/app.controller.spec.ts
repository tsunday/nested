import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  const mockedHello = 'Mocked Hello World!';

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    })
      .useMocker((token) => {
        console.log('useMocker called');
        if (token === AppServihce) {
          return {
            getHello: () => mockedHello,
          };
        }
      })
      .compile();
  });

  describe('getHello', () => {
    it('should return "Mocked Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe(mockedHello);
    });
  });
});
