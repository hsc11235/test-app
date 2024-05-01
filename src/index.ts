import fastify from "fastify";

const server = fastify({ logger: { level: "info" } });

// GET Route to fetch all users
server.get("/test", async () => {
    return { message: "Welcome to my Fastify API!" };
});

server.listen({ host: "localhost", port: 5000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
