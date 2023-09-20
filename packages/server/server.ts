import cors from "cors";
import express, { Express, Request, Response } from "express";

// -----------------------------------------------

// -----------------------------------------------

const app: Express = express();
const PORT = process.env.SERVER_PORT ?? 5999;

// -----------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// -----------------------------------------------

app.get("/", (_req: Request, res: Response) => {
  res.send("Restful called!");
});

// -----------------------------------------------
app.listen(PORT, () => {
  console.info(
    `⚡️[Happ House Server]: Server is running at http://localhost:${PORT}`
  );
});
