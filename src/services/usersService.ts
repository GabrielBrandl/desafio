import UsersModel from '../models/usersModel';

interface UsersService {
  getUser(userId: string): Promise<UsersModel>;
  createUser(id: string, nome: string, telefone: string): Promise<void>;
}

export default UsersService;
