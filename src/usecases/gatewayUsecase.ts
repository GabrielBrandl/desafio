import GatewayService from '../services/gatewayService';
import GatewayModel from '../models/gatewayModel';

class GatewayUsecase {
  constructor(private gatewayService: GatewayService) {}

  async getBalance(userId: string): Promise<number> {
    return this.gatewayService.getBalance(userId);
  }

  async performTransaction(userId: string, valor: number, tipo: string): Promise<void> {
    return this.gatewayService.performTransaction(userId, valor, tipo);
  }

  async getClientInfo(userId: string): Promise<{ id: string; nome: string; telefone: string; saldo: number }> {
    return this.gatewayService.getClientInfo(userId);
  }

  async createClient(id: string, nome: string, telefone: string): Promise<void> {
    return this.gatewayService.createClient(id, nome, telefone);
  }
}

export default GatewayUsecase;
