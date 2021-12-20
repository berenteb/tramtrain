import {TrainSchedulerDetailsEntity} from "./TrainInfo";
import {StationSchedulerDetails} from "./StationTimetable";

export interface MavApiResponse {
    trainSchedulerDetails?: (TrainSchedulerDetailsEntity)[] | null;
    stationSchedulerDetails?: StationSchedulerDetails | null;
    routeSchedulerDetails?: null;
}