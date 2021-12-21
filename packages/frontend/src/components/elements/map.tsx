import styled from "styled-components";
import {borderRadius, spacing} from "../../theme/theme";
import {useEffect, useState} from "react";
import {loader} from "../../utils/googlemaps-loader";
import {TrainLocationData} from "../types/LocatorTypes";
import {useInterval} from "../../utils/use-interval";
import {ApiPaths, makeApiCall} from "../../utils/api";

const MapsWrapper = styled.div`
  height: 400px;
  width: 400px;
  border-radius: ${borderRadius.md};
  margin: ${spacing.lg};
`

export function Maps({lat, lon}:{lat: number, lon: number}){
    useEffect(()=>{
        loader.load().then((google) => {
            const map = new google.maps.Map(document.getElementById("map"), {
                mapId: "4040d837697232af",
                disableDefaultUI: true,
                gestureHandling: "greedy",
                center: {
                    lat: lat,
                    lng: lon
                },
                zoom: 15
            });
            new google.maps.Marker({
                icon:{
                    url: "http://"+window.location.hostname+":3000/icons/stop-round-dark.svg",
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(25, 25) // anchor
                },
                position: {lat:lat, lng:lon},
                map
            })
        })
            .catch(e => {
                console.log(e)
            });
    })
    return <MapsWrapper id="map"/>
}

export function MapsForTrainLocation({trainCode}:{trainCode: string}){
    const [trainLocation, setTrainLocation] = useState<TrainLocationData>()
    const [error, setError] = useState<Error | undefined>()
    const [marker, setMarker] = useState<any>()
    const [map, setMap] = useState<any>()
    useEffect(()=>{
        if(trainLocation){
            loader.load().then((google) => {
                setError(undefined);
                setMap(new google.maps.Map(document.getElementById("map"), {
                    mapId: "4040d837697232af",
                    disableDefaultUI: true,
                    gestureHandling: "greedy",
                    center: {
                        lat: trainLocation?.GpsLat,
                        lng: trainLocation?.GpsLon
                    },
                    zoom: 15
                }))
                return google
            }).then(google=>{
                setMarker(new google.maps.Marker({
                    icon:{
                        url: "http://"+window.location.hostname+":3000/icons/tram-round-dark.svg",
                        scaledSize: new google.maps.Size(50, 50), // scaled size
                        origin: new google.maps.Point(0,0), // origin
                        anchor: new google.maps.Point(25, 25) // anchor
                    },
                    position: {
                        lat: trainLocation?.GpsLat,
                        lng: trainLocation?.GpsLon
                    },
                    map
                }))
            })
                .catch(e => {
                    setError(e);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trainLocation?.Vonatszam])
    useInterval(()=>{
        makeApiCall<TrainLocationData>({path: ApiPaths.TRAIN_LOCATION, id: trainCode}).then(result=>{
            setTrainLocation(result);
            setError(undefined);
            if(marker)marker.setPosition({lat:trainLocation?.GpsLat, lng:trainLocation?.GpsLon})
            if(map){
                if(marker){
                    marker.setMap(map);
                }
                map.setCenter({lat:trainLocation?.GpsLat, lng:trainLocation?.GpsLon})
            }
        }).catch(e=>{
            setError(e);
        })
    }, 5000)
    if(!trainLocation || error) return null;
    return <MapsWrapper id="map"/>
}