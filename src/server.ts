import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as routes from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

for (const route in routes) {
    const routeData = routes[route as keyof typeof routes];
    if (routeData.auth) {
        app[routeData.method](routeData.path, routeData.auth ,routeData.handler);
    } else {
        app[routeData.method](routeData.path, routeData.handler);
    }
}

export default app;

