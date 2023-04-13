import Routes from "../typings/routes";

const baseRoute: Routes = {
    method: "put",
    handler: (req, res) => {
        res.send("Hello World! from put requirest");
    }
}

export default baseRoute;