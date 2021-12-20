import express, { NextFunction } from "express";
import { Router } from "./router";
import cors from "cors";
require("dotenv").config();

const app = express();
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
        console.error(err);
        res.statusCode = 400;
        res.send(err.toString());
    }
);

app.listen(3001, () => {
    console.log("Server listening on " + 3001);
});
