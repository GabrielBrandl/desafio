# Microservices Project

Este projeto consiste em três microserviços escritos em TypeScript:

1. **financial.ts**: Responsável por operações financeiras.
2. **users.ts**: Gerencia informações de usuários.
3. **gateway.ts**: Atua como um gateway central para integração entre serviços.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

project-root
|-- src
| |-- controllers
| |-- usecases
| |-- models
| |-- services
| |-- app.ts
| |-- container.ts
| |-- server.ts


## Configuração

1. **Instalação de Dependências:**
   ```bash
   npm install

npm start


Endpoints
Financial Service
GET /financial/:id
Retorna informações financeiras para o usuário com o ID especificado.

POST /financial/transacao/:id
Realiza uma transação financeira para o usuário com o ID especificado.

POST /financial/cliente
Cria um novo cliente financeiro.

Gateway Service
GET /saldo
Retorna o saldo de um cliente.

POST /transacao
Realiza uma transação por meio do gateway.

GET /cliente/:id
Retorna informações do cliente usando o ID especificado.

POST /cliente
Cria um novo cliente por meio do gateway.

Users Service
GET /users/:id
Retorna informações de usuário para o ID especificado.

POST /users
Cria um novo usuário.
