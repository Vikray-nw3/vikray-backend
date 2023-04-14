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

export const walkSync = async(dir: string) => {
    // getting the directory path to read the files from `routes` folder
    const basePath = path.join(__dirname, 'routes', dir);
    // reads all the files and directories from the `routes` folder
    const files = fs.readdirSync(basePath);
    
    for(let i = 0; i < files.length; i++) {
        const file = files[i];
        const fsStat = fs.statSync(path.join(basePath, file));

        // checks if the current instance is a file
        if (fsStat.isFile()) {
            const routeData: Routes = (await import(path.join(basePath, file))).default;
            const pathSetter = path.join('/', `${basePath.substring(path.join(__dirname, 'routes').length)}`);
            if (routeData.auth) {
                // we are doing folder based routing
                app[routeData.method](pathSetter, routeData.auth, routeData.handler);
            } else {
                app[routeData.method](pathSetter, routeData.handler);
            }
        } else if (fsStat.isDirectory()) {
            await walkSync(path.join(dir, file));
        }
    }
}

export default app;

