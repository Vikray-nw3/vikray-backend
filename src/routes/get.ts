import Routes from "../typings/routes";

const BassRoute: Routes = {
    method: 'get',
    handler: (_req, res) => {
        res.send("Hello World!");
    },
    auth: (_req, res, next) => {
        console.log(_req.headers);
        
        next();
    }, 
};

export default BassRoute;