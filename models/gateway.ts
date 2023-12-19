import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import mongoose from 'mongoose';
import GatewayServiceImpl from '../services/gatewayServiceImpl'; // Importa a implementação do serviço de gateway

mongoose.connect('mongodb://localhost:27017/gatewaydb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const gatewayService = new GatewayServiceImpl(); // Cria uma instância do serviço de gateway

app.get('/saldo', async (req, res) => {
    try {
       const userId = req.query.id_do_cliente;
   
       if (typeof userId !== 'string') {
         throw new Error('ID do cliente não é uma string');
       }
   
       const saldo = await gatewayService.getBalance(userId);
   
       res.json({ saldo });
    } catch (error) {
       console.error(error);
       res.status(500).send('Internal Server Error');
    }
   });

app.post('/transacao', async (req, res) => {
try {
   const transaction = req.body;

   const result = await gatewayService.createTransaction(transaction);

   res.json({ result });
} catch (error) {
   console.error(error);
   res.status(500).send('Internal Server Error');
}
});

app.listen(port, () => {
console.log(`Gateway API listening at http://localhost:${port}`);
});