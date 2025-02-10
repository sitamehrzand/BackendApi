import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({ data: req.body });
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const updatedUser = await prisma.user.update({
    where: { id },
    data: req.body,
  });
  res.json(updatedUser);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  await prisma.user.delete({ where: { id } });
  res.status(204).send();
};
