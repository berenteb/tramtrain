import {Loader} from "@googlemaps/js-api-loader";

export const loader = new Loader({
    apiKey: process.env.REACT_APP_MAPS_API_KEY||""
})