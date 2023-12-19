import mongoose, { Document } from 'mongoose';


interface FinancialModel extends Document {
  userId: string;
  saldo: number;
}

const FinancialSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  saldo: { type: Number, default: 0 },
});

const Financial = mongoose.model<FinancialModel>('Financial', FinancialSchema);

export default Financial;
