import Routes from "../typings/routes";

const BassRoute: Routes = {
    path: "/",
    method: 'get',
    handler: (_req, res) => {
        res.send("Hello World!");
    }
};

export default BassRoute;