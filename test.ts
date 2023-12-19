import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Inserir um novo usuário
  await prisma.user.create({
    data: {
      user: 'John Doe',
      email: 'john.doe@example.com',
    },
  });

  // Consultar todos os usuários
  const users = await prisma.user.findMany();
  console.log('Usuários:', users);
}

main()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
