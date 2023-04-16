import app, { walkSync } from "./server";
import { PORT } from "./utils/config";
import { Server, IncomingMessage, ServerResponse } from "http";
import Express from "express";

class ServerObject {
    server: Server<typeof IncomingMessage, typeof ServerResponse> = new Server();
    app: Express.Application;
    constructor(app: Express.Application) {
        this.app = app;
    }

    async start() {
        await walkSync("");
        this.server = this.app.listen(parseInt(PORT), () => {
            console.log("\x1b[34m", `Listening on port ${PORT}`, "\x1b[37m");
        });
        return this.server;
    }

    async close() {
        this.server.close(this.errorHandler);
    }

    errorHandler(err: Error | undefined) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    }
}

const main = async () => {
    const server = new ServerObject(app);
    await server.start();

    process.on("SIGINT", async () => {
        await server.close();
        console.log("\x1b[31m%s\x1b[0m", "\nProcess terminated", "\x1b[37m");
    });
};

main();
