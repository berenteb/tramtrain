import { Express } from "express";
import getStationListMW from "./mw/getStationListMW";
import apiMW from "./mw/apiMW";
import getStationMW from "./mw/getStationMW";
import getTrainInfoMW from "./mw/getTrainInfoMW";
import getLocationForTrainMW from "./mw/getLocationForTrainMW";


export function Router(app: Express) {

  app.get("/api/train-location/:id", getLocationForTrainMW(), apiMW());
  app.get("/api/train/:id", getTrainInfoMW(), apiMW());
  app.get("/api/stops/:id", getStationMW(), apiMW());
  app.get("/api/stops", getStationListMW(), apiMW());
}
