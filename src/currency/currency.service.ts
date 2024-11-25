import { Injectable } from '@nestjs/common';
import { Currency, ICurrency } from './schema/currency.schema';

@Injectable()
export class CurrencyService {
  async createCurrency(name: string, symbol: string): Promise<ICurrency> {
    const currency = new Currency({ name, symbol });
    return await currency.save();
  }

  async getCurrencyById(id: string): Promise<ICurrency | null> {
    return await Currency.findById(id).exec();
  }

  async getAllCurrencies(): Promise<ICurrency[]> {
    return await Currency.find().exec();
  }

  async updateCurrency(
    id: string,
    updateData: Partial<ICurrency>,
  ): Promise<ICurrency | null> {
    return await Currency.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
  }

  async deleteCurrency(id: string): Promise<ICurrency | null> {
    return await Currency.findByIdAndDelete(id).exec();
  }
}
