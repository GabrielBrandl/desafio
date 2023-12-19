import UsersService from '../services/usersService';
import UsersModel from '../models/usersModel';

class UsersUsecase {
  constructor(private usersService: UsersService) {}

  async getUser(userId: string): Promise<UsersModel> {
    return this.usersService.getUser(userId);
  }

  async createUser(id: string, nome: string, telefone: string): Promise<void> {
    return this.usersService.createUser(id, nome, telefone);
  }
}

export default UsersUsecase;
