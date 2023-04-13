import Routes from "../typings/routes";

const baseRoute: Routes = {
    method: "post",
    handler: (req, res) => {
        res.send("Hello World! from post request");
    }
};

export default baseRoute;