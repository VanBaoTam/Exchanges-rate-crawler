import { Request, Response, response } from "express";
// import { responseMessageInstance } from "../utils/index";
import dotenv from "dotenv";
dotenv.config();

//------------------------------------------------
export class CurrencyService {
  private static instance: CurrencyService;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new CurrencyService();
    }
    return this.instance;
  }

  // -----------------------------------------------
  async getCurrency(req: Request, res: Response) {
    return res.json({ message: "FETCHED" });
  }
}

//------------------------------------------------
export const currencyServiceInstance = CurrencyService.getInstance();
