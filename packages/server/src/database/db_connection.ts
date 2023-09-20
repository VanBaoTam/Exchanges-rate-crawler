import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

//-----------------------------------
const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  timezone: "Asia/Saigon",
};

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.connect();
    return connection;
  } catch (error) {
    throw error;
  }
}

export default connectToDatabase; // Export the async function
