import { Router } from "express";

import {
    ctrlCreateSale,
    ctrlListSales

} from "../controllers/sale.controller.js";

const saleRouter = Router();

// create a new sale
saleRouter.post("/", ctrlCreateSale);

// get all sales
saleRouter.get("/", ctrlListSales);

export { saleRouter };