import express from "express";
import {getMavNews} from "../news/getMavNews";

export default function getMavNewsMW() {
    return async function (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        getMavNews().then(results=>{
            res.locals.payload = {news: results};
            return next();
        }).catch(err=>{
            return next(err);
        })
    };
}
