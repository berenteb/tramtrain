import express from "express";
import {getSzktNews} from "../news/getSzktNews";

export default function getSzktNewsMW() {
    return async function (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        getSzktNews().then(results=>{
            res.locals.payload = {news: results};
            return next();
        }).catch(err=>{
            return next(err);
        })
    };
}
