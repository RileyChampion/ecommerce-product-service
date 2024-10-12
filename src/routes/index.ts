import { Router, Request, Response } from "express";
import productRouter from "./productRoutes";

const router: Router = Router();

router.use('/', productRouter);

router.get('/livecheck', (req: Request, res: Response) => {
    res.send('API is alive...');
});

export default router;