import { Module } from '@nestjs/common';
import { DailyPriceService } from './daily-price.service';
import { DailyPriceController } from './daily-price.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyPriceSchema } from './schema/daily-price.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DailyPrice', schema: DailyPriceSchema },
    ]),
  ],
  providers: [DailyPriceService],
  controllers: [DailyPriceController],
})
export class DailyPriceModule {}
