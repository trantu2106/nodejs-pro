// Get the client
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
const getConnection = async () => {
  // Create the connection to database
  const connection = await mysql.createConnection({
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  return connection;
};

export default getConnection;
