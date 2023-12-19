import FinancialModel from '../src/models/financialModel';
import FinancialService from '../src/services/financialService';
import Financial from '../models/financial';

class FinancialServiceImpl implements FinancialService {
  async getFinancial(userId: string): Promise<FinancialModel> {
    try {
      const financial = await Financial.findOne({ userId }) || { saldo: 0 };
return financial as FinancialModel;
    } catch (error) {
      throw new Error('Error fetching financial data');
    }
  }

  async performTransaction(userId: string, valor: number, tipo: string): Promise<void> {
    try {
      const financial = await Financial.findOne({ userId }) || { saldo: 1000 };;

      if (tipo === 'debito' && financial.saldo - valor < 0) {
        throw new Error('Saldo insuficiente para a transação de débito');
      }

      if (financial && financial instanceof Financial) {
        financial.saldo = tipo === 'debito' ? financial.saldo - valor : financial.saldo + valor;
      await financial.save();
      } else if (financial && 'saldo' in financial) {
        console.log('Usuário financeiro não encontrado para o ID:', userId);
        return;
      }
    } catch (error) {
      throw new Error('Error performing transaction');
    }
  }

  async createClient(id: string): Promise<void> {
    try {
      const financial = new Financial({ userId: id, saldo: 0 });
      await financial.save();
    } catch (error) {
      throw new Error('Error creating client');
    }
  }
}

export default FinancialServiceImpl;
