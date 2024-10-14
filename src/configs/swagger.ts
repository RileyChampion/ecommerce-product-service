import swaggerJSDoc from 'swagger-jsdoc';
import { SwaggerDefinition, Options } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'API documentation for an Express API with TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Adjust as needed
        description: 'Development server',
      },
    ],
};
  
const swaggerOptions: Options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'], // Path to the API routes files for annotations
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;