import FinancialService from './src/services/financialService';
import GatewayService from './src/services/gatewayService';
import UsersService from './src/services/usersService';
import FinancialServiceImpl from './services/financialServiceImpl';
import GatewayServiceImpl from './services/gatewayServiceImpl';
import UsersServiceImpl from './services/usersServiceImpl';


class Container {
  financialService: FinancialService;
  gatewayService: GatewayService;
  usersService: UsersService;

  constructor() {
    this.financialService = new FinancialServiceImpl();
    this.gatewayService = new GatewayServiceImpl();
    this.usersService = new UsersServiceImpl();
  }
}

export default Container;
