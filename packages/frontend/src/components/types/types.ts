import {SchedulerEntity} from "./TrainInfo";

export type StationListItem = {
    "name": string,
    "code": string,
    "baseCode": string,
    "localCode": number,
    "lat": number,
    "lon": number
}

export type TrainInfo = {
    code: string;
    trainId: string;
    alert: string | undefined | null;
    havariaInfo: string[] | null | undefined;
    delay: number;
    start: string;
    endStation: string;
}

export type TripInfo = TrainInfo & {scheduler: SchedulerEntity[]};

export type Coordinate = {
    lat: number,
    lon: number
}