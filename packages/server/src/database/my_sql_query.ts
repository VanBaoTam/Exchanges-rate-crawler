// import { Connection, ResultSetHeader } from "mysql2/promise"; // Import the necessary types from the mysql2 library

// export default async function queryDatabase(
//   conn: Connection,
//   q: string,
//   params: any[] // Adjust the type of params as needed based on your use case
// ): Promise<ResultSetHeader> {
//   return new Promise()<ResultSetHeader>((resolve: , reject) => {
//     const handler = (error: Error | null, result: ResultSetHeader) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       resolve(result);
//     };
//     conn.query(q, params, handler);
//   });
// }
