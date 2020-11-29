import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const Johnny = await prisma.profile.create({
    data: {
      name: 'Johnny B. Goode',
    },
  });
  console.log(Johnny);
  await prisma.$disconnect();
};

main();
