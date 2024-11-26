import { Schema, model, Document, Types } from 'mongoose';

interface IDailyPrice extends Document {
  currencyId: Types.ObjectId;
  price: number;
  date: Date;
}

const DailyPriceSchema = new Schema<IDailyPrice>({
  currencyId: { type: Schema.Types.ObjectId, ref: 'Currency', required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
});

const DailyPrice = model<IDailyPrice>('DailyPrice', DailyPriceSchema);

export { DailyPrice, IDailyPrice, DailyPriceSchema };
