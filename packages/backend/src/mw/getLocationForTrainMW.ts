import express from "express";
import {MavApiPaths} from "../config/mav-api-paths";
import trainLocationRequest from "../trainLocationRequest";

export default function getLocationForTrainMW() {
    return async function (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const code = req.params.id;
        if(!code) return next("Nincs ID");
        const body = {
            Nyelv: "HU",
            UAID: "1-0xLbEm1FRGGO1ENXq912wtCy821e"
        }
        trainLocationRequest(MavApiPaths.GetVonatok, body).then(result=>{
            let found = result.Vonatok.find(train=>train.Vonatszam === code);
            if(!found) return next("Nem található vonat!")
            res.locals.payload = found;
            return next()
        }).catch(err=>{
            return next(err);
        })
    };
}