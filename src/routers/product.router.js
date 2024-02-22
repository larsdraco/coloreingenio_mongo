import { Router } from "express";
import { 
    ctrlListProducts,
    ctrlCreateProduct,
    ctrlGetProduct,
    ctrlUpdateProduct,
    ctrlDeleteProduct
} from "../controllers/product.controller.js";

const productRouter = Router();

// get all products
productRouter.get("/", ctrlListProducts);

// create a new product
productRouter.post("/", ctrlCreateProduct);

// get one, update, and delete a product
productRouter.get("/:productId", ctrlGetProduct);
productRouter.patch("/:productId", ctrlUpdateProduct);
productRouter.delete("/:productId", ctrlDeleteProduct);

export { productRouter };