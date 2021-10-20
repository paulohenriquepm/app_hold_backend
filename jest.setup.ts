import prisma from '@shared/db/prisma';
import 'reflect-metadata';

const dropDatabase = () => {
  return Promise.all([prisma.user.deleteMany()]);
};

beforeEach(async () => {
  await dropDatabase();
});

afterEach(async () => {
  prisma.$disconnect;
});
