import {Page} from "../containers/page-containers";
import {useEffect, useState} from "react";
import {ApiPaths, makeApiCall} from "../../utils/api";
import {LoadingPage} from "../elements/loader";
import {useParams} from "react-router";
import {AlertText, CardWrapper, StopList} from "../elements/basic";
import {MapsForTrainLocation} from "../elements/map";
import {TripInfo} from "../types/types";
import {StyledLink} from "../elements/link";
import {timeText} from "../../utils/time";
import styled from "styled-components";
import {borderRadius, colors, fontSize, spacing} from "../../theme/theme";
import {Paths} from "../../utils/paths";
import {ArrowCircleRight} from "@styled-icons/fluentui-system-filled"
import {ErrorPage} from "./error";
import {Title} from "../../utils/title";
import {BackButton} from "../elements/back-button";

export function TrainPage() {
  const [train, setTrain] = useState<TripInfo>()
  const [error, setError] = useState<string | undefined>();
  const params = useParams()
  useEffect(()=>{
    makeApiCall<TripInfo>({path: ApiPaths.TRAIN, id: params.id, timeout: 10000}).then(result=>{
      setTrain(result);
    }).catch(e=>{
      setError(e);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if(error) return <ErrorPage text={error}/>
  if(!train) return <LoadingPage/>
  Title(train.code ? "Tram-train " + train.code : undefined);
  return <Page>
    <BackButton to={"/"+Paths.STOPS}>Megállók</BackButton>
    <TrainCode>Tram-train {train.code}</TrainCode>
    <h2><ArrowIcon/> {train.endStation}</h2>
    {train.delay && train.delay > 0 ? <AlertText>Késés: {train.delay} perc</AlertText> : null}
    {train.alert && <AlertText>{train.alert}</AlertText>}
    {train.havariaInfo && train.havariaInfo.map((info)=><AlertText>{info}</AlertText>)}
    {train && <MapsForTrainLocation trainCode={train.code}/>}
    <CardWrapper>
      <StopList>
        {train.scheduler.map(stop=>{
          return <li>{timeText(stop.start || stop.arrive || undefined)} <StyledLink to={"/"+Paths.STOPS+"/"+stop.station.code} replace>{stop.station.name}</StyledLink></li>
        })}
      </StopList>
    </CardWrapper>
  </Page>
}

const TrainCode = styled.div`
  border-radius: ${borderRadius.sm};
  border: 2px solid ${colors.textColorLight};
  color:${colors.textColorLight};
  padding: 5px 10px;
  margin: ${spacing.lg};
  font-size: ${fontSize.md};
  @media (prefers-color-scheme: dark){
    border: 2px solid ${colors.textColorDark};
    color:${colors.textColorDark};
  }
`

const ArrowIcon = styled(ArrowCircleRight)`
  height: 30px;
`
