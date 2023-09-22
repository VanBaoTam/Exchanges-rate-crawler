import { Connection, ResultSetHeader } from "mysql2/promise";
import connectToDatabase from "./db_connection";

export default async function queryDatabase(
  q: string,
  params: any[]
): Promise<ResultSetHeader> {
  const conn = await connectToDatabase();
  return new Promise<ResultSetHeader>((resolve, reject) => {
    const handler = async (error: Error | null, result: ResultSetHeader) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    };
    conn.query({ sql: q, values: params }, handler);
  });
}
