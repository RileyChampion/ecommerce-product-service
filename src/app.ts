import express, { Express } from "express";
import routes from './routes';
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './configs/swagger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;