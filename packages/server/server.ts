import cors from "cors";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PORT as DB_PORT } from "./src/constants";
import { routes } from "./src/routes";

// -----------------------------------------------
dotenv.config();
const app: Express = express();
const PORT = DB_PORT || 5999;

// -----------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// -----------------------------------------------

app.get(`/`, (_req: Request, res: Response) => {
  res.send("Restful called!");
});

routes(app);
// -----------------------------------------------
app.listen(PORT, () => {
  console.info(
    `⚡️[Exchange's rate server]: Server is running at http://localhost:${PORT}`
  );
});
