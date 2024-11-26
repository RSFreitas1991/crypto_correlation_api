import { IsDateString, IsMongoId, IsString } from 'class-validator';

export class CreateDailyPriceDto {
  @IsMongoId()
  currencyId: string;
  @IsString()
  price: string;
  @IsDateString()
  date: String;
}
