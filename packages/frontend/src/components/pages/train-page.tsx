import {Page} from "../containers/page-containers";
import {useEffect, useState} from "react";
import {ApiPaths, makeApiCall} from "../../utils/api";
import {LoadingPage} from "../elements/loader";
import {useParams} from "react-router";
import {AlertText, StopList} from "../elements/basic";
import {MapsForTrainLocation} from "../elements/map";
import {TripInfo} from "@tramtrain/backend/src/types";
import {StyledLink} from "../elements/link";
import {timeText} from "../../utils/time";
import styled from "styled-components";
import {borderRadius, fontSize, spacing} from "../../theme/theme";
import {Paths} from "../../utils/paths";
import {ArrowCircleRight} from "@styled-icons/fluentui-system-filled"

export function TrainPage() {
  const [train, setTrain] = useState<TripInfo>()
  const params = useParams()
  useEffect(()=>{
    makeApiCall<TripInfo>({path: ApiPaths.TRAIN, id: params.id}).then(result=>{
      setTrain(result);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if(!train) return <LoadingPage/>
  return <Page>
    <TrainCode>Tram-train {train.code}</TrainCode>
    <h2><ArrowIcon/> {train.endStation}</h2>
    {train.delay && train.delay > 0 ? <AlertText>Késés: {train.delay} perc</AlertText> : null}
    {train.alert && <AlertText>{train.alert}</AlertText>}
    {train.havariaInfo && train.havariaInfo.map((info)=><AlertText>{info}</AlertText>)}
    {train && <MapsForTrainLocation trainCode={train.code}/>}
    <StopList>
      {train.scheduler.map(stop=>{
        return <li>{timeText(stop.start || stop.arrive || undefined)} <StyledLink to={"/"+Paths.STOPS+"/"+stop.station.code} replace>{stop.station.name}</StyledLink></li>
      })}
    </StopList>
  </Page>
}

const TrainCode = styled.div`
  border-radius: ${borderRadius.sm};
  border: 2px solid black;
  padding: 5px 10px;
  margin: ${spacing.lg};
  font-size: ${fontSize.md};
`

const ArrowIcon = styled(ArrowCircleRight)`
  height: 30px;
`
