import Routes from "../../typings/routes";

const BassRoute: Routes = {
    method: 'get',
    handler: (_req, res) => {
        res.send("Hello World! from model");
    }
};

export default BassRoute;