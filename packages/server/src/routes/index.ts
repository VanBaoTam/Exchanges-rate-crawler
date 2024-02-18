import { Express } from "express";
import { currencyRouter } from "./currency.routes";

export const routes = (app: Express) => {
  app.use("/v1/api/currency", currencyRouter);
};
