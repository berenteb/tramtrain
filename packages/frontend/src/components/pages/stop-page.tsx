import {Page} from "../containers/page-containers";
import {useEffect, useState} from "react";
import {ApiPaths, makeApiCall} from "../../utils/api";
import {LoadingPage} from "../elements/loader";
import {StationPageData} from "../types/DataWrapper";
import {useNavigate, useParams} from "react-router";
import styled from "styled-components";
import {timeText} from "../../utils/time";
import {borderRadius, boxShadows, colors, spacing} from "../../theme/theme";
import {InfoText} from "../elements/basic";
import {Paths} from "../../utils/paths";
import {Maps} from "../elements/map";

export function StopPage() {
  const [stop, setStop] = useState<StationPageData>()
  const params = useParams()
  const navigate = useNavigate();
  useEffect(()=>{
    makeApiCall<StationPageData>({path: ApiPaths.STOPS, id: params.id}).then(result=>{
      setStop(result);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if(!stop) return <LoadingPage/>
  return <Page>
    <h1>{stop.station.name}</h1>
    <Maps lat={stop.station.lat} lon={stop.station.lon}/>
    {stop.departures.length > 0 ? <DepartureTable>
      <DepartureField>
        <p>Időpont</p>
        <p>Késés</p>
        <p>Útirány</p>
      </DepartureField>
      {stop.departures.map(dep => {
        return <DepartureField key={dep.start} onClick={()=>{navigate("/"+Paths.TRAIN+"/"+dep.trainId,{replace: true})}}>
          <p>{timeText(dep.start)}</p>
          <p>{dep.delay ? dep.delay + " perc" : undefined}</p>
          <p>{dep.endStation}</p>
        </DepartureField>
      })}
    </DepartureTable>:<InfoText>Nincs indulás a mai napra.</InfoText>}

  </Page>
}

const DepartureField = styled.div`
  display: grid;
  text-align: left;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px 10px;

  :nth-child(even) {
    background-color: ${colors.primaryTranslucent};
  }

  :last-child {
    border-bottom-left-radius: ${borderRadius.md};
    border-bottom-right-radius: ${borderRadius.md};
  }
  transition: transform .2s;
  :not(:first-child){
    :hover{
      cursor: pointer;
      background-color: ${colors.primary};
    }
  }
`

const DepartureTable = styled.div`
  box-shadow: ${boxShadows.md};
  -webkit-box-shadow: ${boxShadows.md};
  -moz-box-shadow: ${boxShadows.md};
  margin: ${spacing.lg};
  border-radius: ${borderRadius.md};
`