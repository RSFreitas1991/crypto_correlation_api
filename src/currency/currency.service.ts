import { Injectable } from '@nestjs/common';
import { Currency, ICurrency } from './schema/currency.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectModel(Currency.modelName) private currencyModel: typeof Currency,
  ) {}
  async createCurrency(name: string, symbol: string): Promise<ICurrency> {
    const currency = new this.currencyModel({ name, symbol });
    return await currency.save();
  }

  async getCurrencyById(id: string): Promise<ICurrency | null> {
    return await this.currencyModel.findById(id).exec();
  }

  async getAllCurrencies(): Promise<ICurrency[]> {
    return await this.currencyModel.find().exec();
  }

  async updateCurrency(
    id: string,
    updateData: Partial<ICurrency>,
  ): Promise<ICurrency | null> {
    return await this.currencyModel
      .findByIdAndUpdate(id, updateData, {
        new: true,
      })
      .exec();
  }

  async deleteCurrency(id: string): Promise<ICurrency | null> {
    return await this.currencyModel.findByIdAndDelete(id).exec();
  }
}
