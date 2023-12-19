import express, { Request, Response } from 'express';
import UsersUsecase from '../usecases/usersUsecase';

class UsersController {
  constructor(private usersUsecase: UsersUsecase) {}

  async getUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;

    try {
      const user = await this.usersUsecase.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const { id, nome, telefone } = req.body;

    try {
      await this.usersUsecase.createUser(id, nome, telefone);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

export default UsersController;
