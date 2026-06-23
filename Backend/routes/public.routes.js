import Router from "express"
import { ProductController } from "../controllers/product.controller.js"

const router = Router();

router.get('/product', ProductController.getProductAll);
router.post('/product', ProductController.createProduct);
router.delete('/product/:name', ProductController.removeProduct);
router.put('/product', ProductController.updateProduct);

export default router