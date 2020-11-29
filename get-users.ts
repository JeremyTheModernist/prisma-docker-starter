import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getFiles = async () => {
  const getRecords = await prisma.profile.findMany();
  console.log(getRecords);
  await prisma.$disconnect();
};

getFiles();
