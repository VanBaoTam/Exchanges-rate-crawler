import { Request, Response, response } from "express";
import { JSDOM } from "jsdom";
// import { responseMessageInstance } from "../utils/index";
import dotenv from "dotenv";
import puppeteer from "puppeteer";
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
    try {
      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();
      await page.goto(process.env.URL);
      await page.waitForSelector("table");
      const tableHTML = await page.$eval("table", (table) => table.outerHTML);
      const { document } = new JSDOM(tableHTML).window;
      const currencyElements = document.querySelectorAll(
        '.mobile-content.ng-binding:not([data-ng-show="vm.langEn"])'
      );
      const currencyValues = [];
      currencyElements.forEach((element) => {
        currencyValues.push(element.textContent.trim());
      });
      await browser.close();
      return res
        .status(200)
        .json({ message: "crawled!", data: currencyValues });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(404).json({ message: "failed!" });
    }
  }
}

//------------------------------------------------
export const currencyServiceInstance = CurrencyService.getInstance();
