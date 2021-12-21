import express from "express";
import mavApiRequest from "../mavApiRequest";
import {MavApiPaths} from "../config/mav-api-paths";
import {TrainInfo} from "../types";
import {Stations} from "../config/stations"

export default function getStationMW() {
    return async function (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const code = req.params.id;
        if(!code) return next("Nincs ID");
        const body: GetStationQuery = {
            type:"StationInfo",
            stationNumberCode: code,
            travelDate:(new Date()).toISOString(),
            minCount:"0",
            maxCount: "9999999"
        }
        mavApiRequest<GetStationQuery>(MavApiPaths.GetTimetable, body).then(result=>{
            let resultData: TrainInfo[] = [];
            if(result.stationSchedulerDetails?.departureScheduler && Array.isArray(result.stationSchedulerDetails?.departureScheduler)){
                resultData = result.stationSchedulerDetails.departureScheduler.map(element=>{
                    const data: TrainInfo = {
                        code: element.code,
                        trainId: element.trainId,
                        alert: element.havarianInfok.kesesInfo,
                        havariaInfo: element.havarianInfok.havariaInfo,
                        delay: element.havarianInfok.aktualisKeses,
                        start: element.start,
                        endStation: element.endStation.name
                    }
                    return data;
                })
            }
            const localStationInfo = Stations.stations.find(s=>s.code===result.stationSchedulerDetails?.station.code)
            res.locals.payload = {departures: resultData, station: {...result.stationSchedulerDetails?.station, lat: localStationInfo?.lat, lon: localStationInfo?.lon}}
            return next()
        }).catch(err=>{
            return next(err);
        })
    };
}

type GetStationQuery = {
    type:string,
    stationNumberCode:string,
    travelDate:string,
    minCount:string,
    maxCount: string
}
