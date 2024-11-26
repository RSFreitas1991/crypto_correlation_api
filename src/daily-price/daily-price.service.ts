import { Injectable } from '@nestjs/common';
import { DailyPrice, IDailyPrice } from './schema/daily-price.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDailyPriceDto } from './dto/create-daily-price.dto';

@Injectable()
export class DailyPriceService {
  constructor(
    @InjectModel(DailyPrice.modelName)
    private dailyPriceModel: typeof DailyPrice,
  ) {}
  async createDailyPrice(dto: CreateDailyPriceDto): Promise<IDailyPrice> {
    const currency = new this.dailyPriceModel(dto);
    return await currency.save();
  }

  async getDailyPriceById(id: string): Promise<IDailyPrice | null> {
    return await this.dailyPriceModel.findById(id).exec();
  }

  async getAllDailyPrices(): Promise<IDailyPrice[]> {
    return await this.dailyPriceModel.find().exec();
  }

  async updateDailyPrice(
    id: string,
    updateData: Partial<IDailyPrice>,
  ): Promise<IDailyPrice | null> {
    return await this.dailyPriceModel
      .findByIdAndUpdate(id, updateData, {
        new: true,
      })
      .exec();
  }

  async deleteDailyPrice(id: string): Promise<IDailyPrice | null> {
    return await this.dailyPriceModel.findByIdAndDelete(id).exec();
  }
}
