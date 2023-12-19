import mongoose, { Document } from 'mongoose';

interface TransactionModel extends Document {
  userId: string;
  valor: number;
  tipo: string;
}

const TransactionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  valor: { type: Number, required: true },
  tipo: { type: String, required: true },
});

const Transaction = mongoose.model<TransactionModel>('Transaction', TransactionSchema);

export default Transaction;
