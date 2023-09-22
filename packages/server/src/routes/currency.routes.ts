import { Router } from "express";
import { currencyInstance } from "../controllers";

// -----------------------------------------------
const currencyRouter = Router();

currencyRouter.get("/", currencyInstance.fetchtenants);

// -----------------------------------------------
export { currencyRouter };
