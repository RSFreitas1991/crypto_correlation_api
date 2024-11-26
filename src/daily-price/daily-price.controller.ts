import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DailyPriceService } from './daily-price.service';
import { CreateDailyPriceDto } from './dto/create-daily-price.dto';
import { IDailyPrice } from './schema/daily-price.schema';
import { ValidateObjectIdPipe } from 'src/currency/validationpipes/id.validatepipe';

@Controller('daily-price')
export class DailyPriceController {
  constructor(private readonly dailyPriceService: DailyPriceService) {}

  @Post()
  async createCurrency(
    @Body() createDailyPrice: CreateDailyPriceDto,
  ): Promise<IDailyPrice> {
    return await this.dailyPriceService.createDailyPrice(createDailyPrice);
  }

  @Get(':id')
  async getCurrencyById(
    @Param('id', ValidateObjectIdPipe) id: string,
  ): Promise<IDailyPrice | null> {
    return await this.dailyPriceService.getDailyPriceById(id);
  }

  @Get()
  async getAllCurrencies(): Promise<IDailyPrice[]> {
    return await this.dailyPriceService.getAllDailyPrices();
  }

  @Put(':id')
  async updateCurrency(
    @Param('id') id: string,
    @Body() updateDailyPriceDto: Partial<IDailyPrice>,
  ): Promise<IDailyPrice | null> {
    return await this.dailyPriceService.updateDailyPrice(
      id,
      updateDailyPriceDto,
    );
  }

  @Delete(':id')
  async deleteCurrency(
    @Param('id', ValidateObjectIdPipe) id: string,
  ): Promise<IDailyPrice | null> {
    return await this.dailyPriceService.deleteDailyPrice(id);
  }
}
