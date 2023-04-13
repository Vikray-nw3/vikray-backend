import express from 'express';
import Methods from './../utils/methodEnums';

export default interface Routes {
    method: keyof typeof Methods;
    auth?: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    handler: (req: express.Request, res: express.Response, next?: express.NextFunction) => void;
}