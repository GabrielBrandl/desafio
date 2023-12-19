import GatewayModel from '../src/models/gatewayModel';
import GatewayService from '../src/services/gatewayService';
import Transaction from '../src/models/transaction'; // Assuming you have a model called 'Transaction' defined
import User from '../models/user';
import axios from 'axios';

class GatewayServiceImpl implements GatewayService {
  createTransaction(transaction: any) {
      throw new Error('Method not implemented.');
  }
  async getBalance(userId: string): Promise<number> {
    try {
      const financialResponse = await axios.get(`http://localhost:3002/financial/${userId}`);
      return financialResponse.data.saldo;
    } catch (error) {
      throw new Error('Error fetching balance');
    }
  }

  async performTransaction(userId: string, valor: number, tipo: string): Promise<void> {
    try {
      await axios.post(`http://localhost:3002/financial/transacao/${userId}`, { valor, tipo });

      const transaction = new Transaction({ userId, valor, tipo });
      await transaction.save();
    } catch (error) {
      throw new Error('Error performing transaction');
    }
  }

  async getClientInfo(userId: string): Promise<{ id: string; nome: string; telefone: string; saldo: number }> {
    try {
      const financialResponse = await axios.get(`http://localhost:3002/financial/${userId}`);
      let User: any

      const { id, nome, telefone } = await User.findOne({ id: userId });
      const saldo = financialResponse.data.saldo;

      return { id, nome, telefone, saldo };
    } catch (error) {
      throw new Error('Error fetching client info');
    }
  }

  async createClient(id: string, nome: string, telefone: string): Promise<void> {
    try {
      const user = new User({ id, nome, telefone });
      await user.save();

      await axios.post('http://localhost:3002/financial/cliente', { id });
    } catch (error) {
      throw new Error('Error creating client');
    }
  }
}

export default GatewayServiceImpl;
