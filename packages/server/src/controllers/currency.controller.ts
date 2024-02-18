import { Request, Response } from "express";
import { currencyServiceInstance } from "../services";

//------------------------------------------------
export class CurrencyController {
  private static instance: CurrencyController;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new CurrencyController();
    }
    return this.instance;
  }

  //-----------------------------------------------
  async fetchtenants(req: Request, res: Response) {
    return await currencyServiceInstance.getCurrency(req, res);
  }
}

//------------------------------------------------
export const currencyInstance = CurrencyController.getInstance();
