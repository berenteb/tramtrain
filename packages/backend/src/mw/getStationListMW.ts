import express from "express";
import {Stations} from "../config/stations"

export default function getStationListMW() {
    return async function (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if(Stations.stations.length === 0) return next("Nincs állomás beállítva (backend hibája)!");
        res.locals.payload = Stations.stations
        return next();
    };
}
