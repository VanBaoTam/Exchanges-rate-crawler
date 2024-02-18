import mysql, { Connection } from "mysql2/promise";
import dotenv from "dotenv";
import { TDatabaseConfig } from "../constants";

dotenv.config();

//-----------------------------------------------
async function connectToDatabase(): Promise<Connection> {
  try {
    const dbConfig: TDatabaseConfig = {
      host: process.env.MYSQL_HOST || "localhost",
      user: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "",
      database: process.env.MYSQL_DB || "pttkht_1",
      timezone: "Asia/Saigon",
    };

    const connection = await mysql.createConnection(dbConfig);
    await connection.connect();
    return connection;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//-----------------------------------------------
export default connectToDatabase;
