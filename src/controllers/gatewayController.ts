import express, { Request, Response } from 'express';
import GatewayUsecase from '../usecases/gatewayUsecase';


class GatewayController {
  constructor(private gatewayUsecase: GatewayUsecase) {}

  async getBalance(req: Request, res: Response): Promise<void> {
    const userId = req.query.id_do_cliente as string;

    try {
      const saldo = await this.gatewayUsecase.getBalance(userId);
      res.json({ saldo });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async performTransaction(req: Request, res: Response): Promise<void> {
    const userId = req.query.id_do_cliente as string;
    const { valor, tipo } = req.body;

    try {
      await this.gatewayUsecase.performTransaction(userId, valor, tipo);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getClientInfo(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;

    try {
      const clientInfo = await this.gatewayUsecase.getClientInfo(userId);
      res.json(clientInfo);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async createClient(req: Request, res: Response): Promise<void> {
    const { id, nome, telefone } = req.body;

    try {
      await this.gatewayUsecase.createClient(id, nome, telefone);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

export default GatewayController;
