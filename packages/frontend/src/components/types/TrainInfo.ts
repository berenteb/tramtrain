export interface TrainSchedulerDetailsEntity {
    train: Train;
    scheduler?: (SchedulerEntity)[] | null;
}
export interface Train {
    name?: string | null;
    seatReservationCode: string;
    code: string;
    companyCode?: string | null;
    route?: string | null;
    startStationReservationCode?: string | null;
    endStationReservationCode?: string | null;
    startStation: Station;
    endStation: Station;
    startDate?: string | null;
    origStartStation?: string | null;
    origEndStation?: string | null;
    start: string;
    virtualStart: boolean;
    arrive: string;
    virtualArrive: boolean;
    distance: number;
    closedTrackway: boolean;
    fullName: string;
    fullNameAndType: string;
    kinds?: (Kinds)[] | null;
    kindsToDisplay?: (Kinds)[] | null;
    kind: Kinds;
    services?: (ServicesEntity)[] | null;
    actualOrEstimatedStart?: string | null;
    actualOrEstimatedArrive?: string | null;
    havarianInfok: HavarianInfok;
    directTrains?: string | null;
    carrierTrains?: string | null;
    startTrack?: string | null;
    endTrack?: string | null;
    jeEszkozAlapId: number;
    fullType: string;
    fullShortType: string;
    fullNameAndPiktogram: FullNameAndPiktogram;
    footer: string;
    viszonylatiJel: ViszonylatiJel;
    viszonylatObject: ViszonylatObject;
    description?: string | null;
    sameCar: boolean;
    trainId: string;
}
export interface Station {
    name: string;
    code: string;
    baseCode: string;
    isInternational: boolean;
    canUseForOfferRequest: boolean;
    canUseForPessengerInformation: boolean;
    country: string;
    coutryIso: string;
    isIn108_1: boolean;
}
export interface Kinds {
    name: string;
    sortName?: string | null;
    code: string;
    priority: number;
    backgrouColorCode?: string | null;
    foregroundColorCode?: string | null;
    sign: Sign;
    startStation: Station;
    endStation: Station;
}
export interface Sign {
    fontName?: string | null;
    character?: string | null;
}
export interface ServicesEntity {
    listOrder: string;
    description: string;
    restrictiveStartStationCode?: string | null;
    restrictiveEndStationCode?: string | null;
    sign: Sign1;
    trainStopKind?: string | null;
}
export interface Sign1 {
    fontName: string;
    character: string;
}
export interface HavarianInfok {
    aktualisKeses: number;
    kesesiOk?: string | null;
    havariaInfo?: string[] | null;
    uzletiInfo?: string | null;
    kesesInfo: string;
}
export interface FullNameAndPiktogram {
    (Collection: any): string;
}
export interface ViszonylatiJel {
    piktogramFullName?: string | null;
    fontSzinKod: string;
    hatterSzinKod: string;
}
export interface ViszonylatObject {
    startStationCode: string;
    startTime: string;
    startTimeZone: string;
    endStationCode: string;
    endTime: string;
    endTimeZone: string;
    travelTime: number;
    startTrack?: string | null;
    endTrack?: string | null;
    innerStationCodes?: (string)[] | null;
}
export interface SchedulerEntity {
    station: Station;
    arrive?: string | null;
    start?: string | null;
    actualOrEstimatedArrive?: string | null;
    actualOrEstimatedStart?: string | null;
    startTrack?: string | null;
    endTrack?: string | null;
    services?: (null)[] | null;
    stopKind: number;
    stopService: StopService;
    distance: number;
}
export interface StopService {
    listOrder?: string | null;
    description?: string | null;
    restrictiveStartStationCode?: string | null;
    restrictiveEndStationCode?: string | null;
    sign?: string | null;
    trainStopKind?: string | null;
}
