import app, { walkSync } from "./server";
import { PORT } from "./utils/config";

const server = walkSync("").then( async() => {
    const server = app.listen(parseInt(PORT), () => {
        console.log("\x1b[34m", `Listening on port ${PORT}`, "\x1b[37m");
    });
    return server;
});


process.on("SIGINT", async () => {
    (await server).close(() => {
        console.log("\x1b[31m%s\x1b[0m", "\nProcess terminated", "\x1b[37m");
    });
});
