import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Exemplo de utilização do Prisma
async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

// Certifique-se de fechar a conexão quando não for mais necessário
async function closePrisma() {
  await prisma.$disconnect();
}

getUsers().finally(closePrisma);
