import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteFile = async () => {
  const deleteRecords = await prisma.profile.deleteMany({
    where: {
      name: {
        contains: 'C',
      },
    },
  });
  console.log(deleteRecords);
  await prisma.$disconnect();
};

deleteFile();
