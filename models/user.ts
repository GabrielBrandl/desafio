import mongoose, { Document } from 'mongoose';

interface UserModel extends Document {
  id: string;
  nome: string;
  telefone: string;
}

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
});

const User = mongoose.model<UserModel>('User', UserSchema);

export default User;
