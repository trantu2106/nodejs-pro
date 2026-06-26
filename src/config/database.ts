// Get the client
import mysql from 'mysql2/promise';

const getConnection = async () => {
  // Create the connection to database
  const connection = await mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root', 
    password: '01657471412@Aa',
    database: 'nodejspro',                                
  });                
  return connection;
};

export default getConnection;
