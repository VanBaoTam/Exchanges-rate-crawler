import cors from "cors";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// -----------------------------------------------
dotenv.config();
const app: Express = express();
const PORT = 3306;

// -----------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// -----------------------------------------------

app.get(`/`, (_req: Request, res: Response) => {
  res.send("Restful called!");
});

// -----------------------------------------------
app.listen(PORT, () => {
  console.info(
    `⚡️[Exchange's rate server]: Server is running at http://localhost:${PORT}`
  );
});
