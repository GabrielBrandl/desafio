import UsersModel from '../src/models/usersModel';
import UsersService from '../src/services/usersService';
import User from '../models/user'; // Assumindo que você tem um modelo chamado 'User' definido

class UsersServiceImpl implements UsersService {
  async getUser(userId: string): Promise<UsersModel> {
    try {
      const user = await User.findOne({ id: userId });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw new Error('Error fetching user');
    }
  }

  async createUser(id: string, nome: string, telefone: string): Promise<void> {
    try {
      const user = new User({ id, nome, telefone });
      await user.save();
    } catch (error) {
      throw new Error('Error creating user');
    }
  }
}

export default UsersServiceImpl;
