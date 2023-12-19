import FinancialModel from '../models/financialModel';

interface FinancialService {
  getFinancial(userId: string): Promise<FinancialModel>;
  performTransaction(userId: string, valor: number, tipo: string): Promise<void>;
  createClient(id: string): Promise<void>;
}

export default FinancialService;
