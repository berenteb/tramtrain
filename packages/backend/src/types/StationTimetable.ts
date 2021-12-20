import {Station, Train} from "./TrainInfo";

export interface StationSchedulerDetails {
    station: Station;
    arrivalScheduler?: (Train)[] | null;
    departureScheduler?: (Train)[] | null;
    services?: unknown[] | unknown;
    moreResult: boolean;
}