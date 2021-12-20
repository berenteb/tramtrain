import express from "express";
import mavApiRequest from "../mavApiRequest";
import {MavApiPaths} from "../config/mav-api-paths";
import { TripInfo} from "../types";

export default function getTrainInfoMW() {
    return async function (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const code = req.params.id;
        if(!code) return next("Nincs ID");
        const body: GetTrainInfoQuery = {
            type:"TrainInfo",
            trainId: code,
            travelDate:(new Date()).toISOString(),
            minCount:"0",
            maxCount: "9999999"
        }
        mavApiRequest<GetTrainInfoQuery>(MavApiPaths.GetTimetable, body).then(result=>{
            let resultData: TripInfo[] = [];
            if(result.trainSchedulerDetails && Array.isArray(result.trainSchedulerDetails)){
                resultData = result.trainSchedulerDetails.map(element=>{
                    const data: TripInfo = {
                        code: element.train.code,
                        trainId: element.train.trainId,
                        alert: element.train.havarianInfok.kesesiOk,
                        havariaInfo: element.train.havarianInfok.havariaInfo,
                        delay: element.train.havarianInfok.aktualisKeses,
                        start: element.train.start,
                        endStation: element.train.endStation.name,
                        scheduler: element.scheduler || []
                    }
                    return data;
                })
            }
            res.locals.payload = resultData[0];
            return next()
        }).catch(err=>{
            return next(err);
        })
    };
}

type GetTrainInfoQuery = {
    type:string,
    trainId:string,
    travelDate:string,
    minCount:string,
    maxCount: string
}
