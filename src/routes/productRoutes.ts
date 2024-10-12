// routes/productRoutes

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns list of all products
 *     responses:
 *       200:
 *         description: A successful response
 */

import { Router, Request, Response } from "express";

const productRouter: Router = Router();

productRouter.get('/products', (req: Request, res: Response) => {
    const products = ["product1", "product2"];
    res.send(JSON.stringify(products));
})

export default productRouter;