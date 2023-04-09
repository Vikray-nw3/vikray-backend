import Routes from "../typings/routes";

const baseRoute: Routes = {
    method: "post",
    path: "/",
    handler: (req, res) => {
        res.send("Hello World! from post request");
    }
};

export default baseRoute;