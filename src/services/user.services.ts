import { prisma } from 'config/client';
import getConnection from '../config/database';
import { RowDataPacket } from 'mysql2/promise';

const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string
) => {
  // insert into database
  await prisma.user.create({
    data: {
      name: fullName,
      email: email,
      address: address,
    },
  });
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const handleDeleteUser = async (id: string) => {
  await prisma.user.delete({
    where :{id : +id}
  })
};

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where :{id : +id},
  })
  return user;
};

const updateUserById = async (
  id: string,
  email: string,
  address: string,
  fullName: string
) => {
  const updatedUser = await prisma.user.update({
    where: { id: +id },
    data: { email: email, address: address, name: fullName },
  });
  return updatedUser;
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  updateUserById,
};
 