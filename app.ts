import express from 'express';
import bodyParser from 'body-parser';
import Container from './container';
import FinancialController from './src/controllers/financialController';
import GatewayController from './src/controllers/gatewayController';
import UsersController from './src/controllers/usersController';
import FinancialUsecase from './src/usecases/financialUsecases';
import GatewayUsecase from './src/usecases/gatewayUsecase';
import UsersUsecase from './src/usecases/usersUsecase';


const app = express();
const port = 3003; // Choose an appropriate port

app.use(bodyParser.json());

const container = new Container();

const financialUsecase = new FinancialUsecase(container.financialService);
const gatewayUsecase = new GatewayUsecase(container.gatewayService);
const usersUsecase = new UsersUsecase(container.usersService);

const financialController = new FinancialController(financialUsecase);
const gatewayController = new GatewayController(gatewayUsecase);
const usersController = new UsersController(usersUsecase);

// Financial Routes
app.get('/financial/:id', (req, res) => financialController.getFinancial(req, res));
app.post('/financial/transacao/:id', (req, res) => financialController.performTransaction(req, res));
app.post('/financial/cliente', (req, res) => financialController.createClient(req, res));

// Gateway Routes
app.get('/saldo', (req, res) => gatewayController.getBalance(req, res));
app.post('/transacao', (req, res) => gatewayController.performTransaction(req, res));
app.get('/cliente/:id', (req, res) => gatewayController.getClientInfo(req, res));
app.post('/cliente', (req, res) => gatewayController.createClient(req, res));

// Users Routes
app.get('/users/:id', (req, res) => usersController.getUser(req, res));
app.post('/users', (req, res) => usersController.createUser(req, res));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
