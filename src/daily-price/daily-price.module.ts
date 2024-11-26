import { Module } from '@nestjs/common';
import { DailyPriceService } from './daily-price.service';
import { DailyPriceController } from './daily-price.controller';

@Module({
  providers: [DailyPriceService],
  controllers: [DailyPriceController]
})
export class DailyPriceModule {}
