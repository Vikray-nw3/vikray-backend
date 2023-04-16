import express from 'express';
import {
    Extended,
    Methods
} from './method';

export default interface Routes {
    method: Methods;
    extended?: Extended;
    auth?: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    handler: (req: express.Request, res: express.Response, next?: express.NextFunction) => void;
}