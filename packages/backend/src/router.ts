import { Express } from "express";
import getStationListMW from "./mw/getStationListMW";
import apiMW from "./mw/apiMW";
import getStationMW from "./mw/getStationMW";
import getTrainInfoMW from "./mw/getTrainInfoMW";
import getLocationForTrainMW from "./mw/getLocationForTrainMW";
import getMavNewsMW from "./mw/getMavNewsMW";
import getSzktNewsMW from "./mw/getSzktNewsMW";

export function Router(app: Express) {

  app.get("/api/news/szkt", getSzktNewsMW(), apiMW());
  app.get("/api/news/mav", getMavNewsMW(), apiMW());
  app.get("/api/train-location/:id", getLocationForTrainMW(), apiMW());
  app.get("/api/train/:id", getTrainInfoMW(), apiMW());
  app.get("/api/stops/:id", getStationMW(), apiMW());
  app.get("/api/stops", getStationListMW(), apiMW());
}
