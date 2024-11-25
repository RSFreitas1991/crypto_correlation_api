import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { ICurrency } from './schema/currency.schema';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { ValidateObjectIdPipe } from './validationpipes/id.validatepipe';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post()
  async createCurrency(
    @Body() createCurrencyDto: CreateCurrencyDto,
  ): Promise<ICurrency> {
    return await this.currencyService.createCurrency(
      createCurrencyDto.name,
      createCurrencyDto.symbol,
    );
  }

  @Get(':id')
  async getCurrencyById(
    @Param('id', ValidateObjectIdPipe) id: string,
  ): Promise<ICurrency | null> {
    return await this.currencyService.getCurrencyById(id);
  }

  @Get()
  async getAllCurrencies(): Promise<ICurrency[]> {
    return await this.currencyService.getAllCurrencies();
  }

  @Put(':id')
  async updateCurrency(
    @Param('id') id: string,
    @Body() updateCurrencyDto: Partial<ICurrency>,
  ): Promise<ICurrency | null> {
    return await this.currencyService.updateCurrency(id, updateCurrencyDto);
  }

  @Delete(':id')
  async deleteCurrency(@Param('id') id: string): Promise<ICurrency | null> {
    return await this.currencyService.deleteCurrency(id);
  }
}
