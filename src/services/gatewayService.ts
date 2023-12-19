import GatewayModel from '../models/gatewayModel';

interface GatewayService {
  getBalance(userId: string): Promise<number>;
  performTransaction(userId: string, valor: number, tipo: string): Promise<void>;
  getClientInfo(userId: string): Promise<{ id: string; nome: string; telefone: string; saldo: number }>;
  createClient(id: string, nome: string, telefone: string): Promise<void>;
}

export default GatewayService;
