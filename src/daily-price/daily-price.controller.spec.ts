import { Test, TestingModule } from '@nestjs/testing';
import { DailyPriceController } from './daily-price.controller';

describe('DailyPriceController', () => {
  let controller: DailyPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyPriceController],
    }).compile();

    controller = module.get<DailyPriceController>(DailyPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
