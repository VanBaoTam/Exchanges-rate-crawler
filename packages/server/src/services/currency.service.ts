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

      // Wait for the table element to be available, you may need to adjust the selector
      await page.waitForSelector("table");

      // Extract the HTML content of the table element
      const tableHTML = await page.$eval("table", (table) => table.outerHTML);
      // Parse the 'tableHTML' using jsdom
      const { document } = new JSDOM(tableHTML).window;

      // Select all elements with class 'mobile-content ng-binding' that are not hidden
      const currencyElements = document.querySelectorAll(
        '.mobile-content.ng-binding:not([data-ng-show="vm.langEn"])'
      );

      // Create an array to store the currency values
      const currencyValues = [];

      // Loop through the selected elements and add their text content to the array
      currencyElements.forEach((element) => {
        currencyValues.push(element.textContent.trim());
      });
      await browser.close();
      return res.status(200).json({ message: "called!", currencyValues });
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }
}

//------------------------------------------------
export const currencyServiceInstance = CurrencyService.getInstance();
