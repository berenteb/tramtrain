import express, { NextFunction } from "express";
import { Router } from "./router";
import cors from "cors";
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());

Router(app);

app.use(
    (
        err: string | Error,
        req: express.Request,
        res: express.Response,
        next: NextFunction
    ) => {
        if(process.env.DEBUG==="true")console.error(err);
        res.statusCode = 400;
        res.send(err.toString());
    }
);

app.listen(process.env.BACKEND_PORT, () => {
    console.log("Server listening on " + process.env.BACKEND_PORT);
});
