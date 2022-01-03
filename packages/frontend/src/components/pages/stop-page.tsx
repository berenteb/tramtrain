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
import {ErrorPage} from "./error";
import {Title} from "../../utils/title";
import {BackButton} from "../elements/back-button";

export function StopPage() {
  const [stop, setStop] = useState<StationPageData>()
  const [error, setError] = useState<string | undefined>();
  const params = useParams()
  const navigate = useNavigate();
  useEffect(()=>{
    makeApiCall<StationPageData>({path: ApiPaths.STOPS, id: params.id, timeout: 10000}).then(result=>{
      setStop(result);
    }).catch(e=>{
      setError(e.toString());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if(error) return <ErrorPage text={error}/>
  if(!stop) return <LoadingPage/>
  Title(stop.station.name);
  return <Page>
    <BackButton to={"/"+Paths.STOPS}>Megállók</BackButton>
    <h1>{stop.station.name}</h1>
    <Maps lat={stop.station.lat} lon={stop.station.lon}/>
    {stop.departures.length > 0 ? <><DepartureTable>
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
    </DepartureTable><InfoText>Tapasztalatok szerint az itt megjelenő késések eltérhetnek a vonatoknál megjelenített késésektől.</InfoText></>:<InfoText>Nincs indulás a mai napra.</InfoText>}
  </Page>
}

const DepartureField = styled.div`
  display: grid;
  text-align: left;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px 10px;
  align-items: center;
  background-color: ${colors.cardBackgroundLight};
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.cardBackgroundDark};
  }

  :nth-child(even) {
    background-color: ${colors.primaryTranslucent};
  }

  :first-child {
    border-top-left-radius: ${borderRadius.md};
    border-top-right-radius: ${borderRadius.md};
  }

  :last-child {
    border-bottom-left-radius: ${borderRadius.md};
    border-bottom-right-radius: ${borderRadius.md};
  }

  transition: transform .2s;

  :not(:first-child) {
    :hover {
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
  background-color: ${colors.cardBackgroundLight};
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.cardBackgroundDark};
  }
`