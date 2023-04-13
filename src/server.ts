import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';

import Routes from './typings/routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const walkSync = async(dir: string, filePath: string) => {
    const basePass = path.join(__dirname, 'routes', dir);
    const files = fs.readdirSync(basePass);
    for(let i = 0; i < files.length; i++) {
        const file = files[i];
        const fsStat = fs.statSync(path.join(basePass, file));
        if (fsStat.isFile()) {
            const routeData: Routes = (await import(path.join(basePass, file))).default;
            if (routeData.auth) {
                app[routeData.method](path.join('/', filePath), routeData.auth, routeData.handler);
            } else {
                app[routeData.method](path.join('/', filePath), routeData.handler);
            }
        } else if (fsStat.isDirectory()) {
            await walkSync(path.join(dir, file), file);
        }
    }
}

walkSync('', '');

export default app;

