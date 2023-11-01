import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppPort } from './app.port';

describe('AppController', () => {
  let app: TestingModule;
  const mockedHello = 'Mocked Hello World!';

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    })
      .useMocker((token) => {
        if (token === AppPort) {
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
