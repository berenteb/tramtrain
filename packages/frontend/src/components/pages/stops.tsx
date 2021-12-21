import {Page} from "../containers/page-containers";
import {useEffect, useState} from "react";
import {StationListItem} from "../types/types";
import {ApiPaths, makeApiCall} from "../../utils/api";
import {LoadingPage} from "../elements/loader";
import {StyledLink} from "../elements/link";
import {InfoText, StopList} from "../elements/basic";
import {Paths} from "../../utils/paths";
import {ErrorPage} from "./error";

export function StopsPage() {
  const [stops, setStops] = useState<StationListItem[]>()
  const [error, setError] = useState<string | undefined>();
  useEffect(()=>{
    makeApiCall<StationListItem[]>({path:ApiPaths.STOPS, timeout: 10000}).then(result=>{
      setStops(result);
    }).catch(e=>{
      setError(e);
    });
  },[])
  if(error) return <ErrorPage text={error}/>
  if(!stops) return <LoadingPage/>
  return <Page>
    <h1>Megállók</h1>
    <InfoText>Válassz megállót!</InfoText>
    <StopList>
      {stops.map(stop=>{
        return <li key={stop.localCode}><StyledLink to={Paths.STOPS+"/"+stop.code}>{stop.name}</StyledLink></li>
      })}
    </StopList>
  </Page>
}
