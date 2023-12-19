import FinancialService from '../services/financialService';
import FinancialModel from '../models/financialModel';

class FinancialUsecase {
  constructor(private financialService: FinancialService) {}

  async getFinancial(userId: string): Promise<FinancialModel> {
    return this.financialService.getFinancial(userId);
  }

  async performTransaction(userId: string, valor: number, tipo: string): Promise<void> {
    return this.financialService.performTransaction(userId, valor, tipo);
  }

  async createClient(id: string): Promise<void> {
    return this.financialService.createClient(id);
  }
}

export default FinancialUsecase;
