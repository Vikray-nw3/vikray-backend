import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

import Routes from './typings/routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const walkSync = (dir: string, filePath: string) => {
    const basePass = path.join(__dirname, 'routes', dir);
    const files = fs.readdirSync(basePass);
    for(let i = 0; i < files.length; i++) {
        const file = files[i];
        const fsStat = fs.statSync(path.join(basePass, file));
        if (fsStat.isFile()) {
            const routeData: Routes = require(path.join(basePass, file)).default;
            if (routeData.auth) {
                app[routeData.method](path.join('/', filePath), routeData.auth, routeData.handler);
            } else {
                app[routeData.method](path.join('/', filePath), routeData.handler);
            }
        } else if (fsStat.isDirectory()) {
            walkSync(path.join(dir, file), file);
        }
    }
}

walkSync('', '');

export default app;

