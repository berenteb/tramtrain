import { TrainInfo} from "./types";
import {Station} from "./TrainInfo";

export type StationPageData = {
    station: Station & {lat: number, lon: number};
    departures: TrainInfo[];
}