import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateFile = async () => {
  const updateRecord = await prisma.profile.update({
    where: {
      id: 2,
    },
    data: {
      name: 'Cindy',
    },
  });
  console.log(updateRecord);
  await prisma.$disconnect();
};

updateFile();
