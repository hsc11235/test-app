import Ajv from "ajv";
import fastify from "fastify";
import postgres from "@fastify/postgres";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

const server = fastify({ logger: { level: "info" } });

// GET Route to fetch all users
server.get('/test', async (_request, _reply) => {
    return { message: 'Welcome to my Fastify API!' };
  });
  
server.listen({ host: "localhost", port: 5000 }, (err: any, address: any) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
