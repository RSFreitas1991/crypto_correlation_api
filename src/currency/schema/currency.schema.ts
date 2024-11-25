import { Schema, model, Document } from 'mongoose';

interface ICurrency extends Document {
  name: string;
  symbol: string;
}

const CurrencySchema = new Schema<ICurrency>({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
});

const Currency = model<ICurrency>('Currency', CurrencySchema);

export { Currency, ICurrency, CurrencySchema };
