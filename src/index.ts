import app from './server';
import {
    PORT
} from './utils/config';

const server = app.listen(PORT, () => {
    console.log("\x1b[34m", `Listening on port ${PORT}`, "\x1b[37m");
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log("\x1b[31m%s\x1b[0m", 'Process terminated', "\x1b[37m");
    });
});