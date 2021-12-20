export type LocatorApiResponse = {
    Vonatok: TrainLocationData[]
}

export interface TrainLocationData {
    EGpsLat: number;
    EGpsLon: number;
    GpsLat: number;
    GpsLon: number;
    Keses: number;
    Menetvonal: string;
    Sebesseg: number;
    Tipus: string;
    Viszonylat: Viszonylat;
    VonatID: string;
    Vonatszam: string;
}
export interface Viszonylat {
    CelAllomasKod: string;
    ErkezesIdeje: number;
    IndulasIdeje: number;
    InduloAllomasKod: string;
}
