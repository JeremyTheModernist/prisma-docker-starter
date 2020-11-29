const express = require('express');
const bodyParser = require('body-parser');
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

const resolvers = {
  getUsers: async (req: any, res: any, next: any) => {
    const getRecords = await prisma.profile.findMany();
    res.send(getRecords);
    console.log(getRecords);
    await prisma.$disconnect();
  },
  createUser: async (req: any, res: any, next: any) => {
    const createRecord = await prisma.profile.create({
      data: {
        name: req.params.name,
      },
    });
    res.send(createRecord);
    console.log(createRecord);
    await prisma.$disconnect();
  },
  updateUser: async (req: any, res: any, next: any) => {
    const id = parseInt(req.params.id);
    const updateRecord = await prisma.profile.update({
      where: {
        id: id,
      },
      data: {
        name: req.body.name,
      },
    });
    res.send(updateRecord);
    console.log(updateRecord);
    await prisma.$disconnect();
  },
  deleteUser: async (req: any, res: any, next: any) => {
    const id = parseInt(req.params.id);
    const deleteRecord = await prisma.profile.delete({
      where: {
        id: id,
      },
    });
    res.send(deleteRecord);
    console.log(deleteRecord);
    await prisma.$disconnect();
  },
};

app.get('/getusers', resolvers.getUsers);
app.post('/createuser/:name', resolvers.createUser);
app.put('/updateuser/:id', resolvers.updateUser);
app.delete('/deleteuser/:id', resolvers.deleteUser);

app.listen(3230, () => {
  console.log('now listening on port 3230');
});
