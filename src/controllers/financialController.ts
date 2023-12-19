import express, { Request, Response } from 'express';
import FinancialUsecase from '../usecases/financialUsecases';


class FinancialController {
  constructor(private financialUsecase: FinancialUsecase) {}

  async getFinancial(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;

    try {
      const financial = await this.financialUsecase.getFinancial(userId);
      res.json(financial);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async performTransaction(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    const { valor, tipo } = req.body;

    try {
      await this.financialUsecase.performTransaction(userId, valor, tipo);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async createClient(req: Request, res: Response): Promise<void> {
    const { id } = req.body;

    try {
      await this.financialUsecase.createClient(id);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

export default FinancialController;
