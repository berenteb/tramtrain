import express from "express";
import * as stations from "../config/stations.json"

export default function getStationListMW() {
    return async function (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if(stations.stations.length === 0) return next("Nincs állomás beállítva (backend hibája)!");
        res.locals.payload = stations.stations
        return next();
    };
}
