import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyModule } from './currency/currency.module';
import { DailyPriceModule } from './daily-price/daily-price.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/crypto'),
    CurrencyModule,
    DailyPriceModule,
    QueueModule,
    QueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
