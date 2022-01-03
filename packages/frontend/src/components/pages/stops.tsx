import {Page} from "../containers/page-containers";
import {useEffect, useState} from "react";
import {Directions, StationListItem} from "../types/types";
import {ApiPaths, makeApiCall} from "../../utils/api";
import {LoadingPage} from "../elements/loader";
import {StyledLink} from "../elements/link";
import {CardWrapper, InfoText, StopList} from "../elements/basic";
import {ErrorPage} from "./error";
import {Title} from "../../utils/title";
import styled from "styled-components";
import {ArrowDownUp} from "@styled-icons/bootstrap/ArrowDownUp"
import {colors} from "../../theme/theme";
import {BackButton} from "../elements/back-button";

export function StopsPage() {
  Title("Megállók");
  const [stops, setStops] = useState<StationListItem[]>()
  const [error, setError] = useState<string | undefined>();
  const [isBackWards, setIsBackWards] = useState<boolean>(false)
  useEffect(()=>{
    makeApiCall<StationListItem[]>({path:ApiPaths.STOPS, timeout: 10000}).then(result=>{
      setStops(result);
    }).catch(e=>{
      setError(e.toString());
    });
  },[])
  if(error) return <ErrorPage text={error}/>
  if(!stops) return <LoadingPage/>
  return <Page>
    <BackButton to="/">Főoldal</BackButton>
    <h1>Megállók</h1>
    <InfoText>Válassz listázási irányt és megállót!</InfoText>
    <CardWrapper>
      <DirectionPicker>
        <p>Listázás {isBackWards ? "Szeged" : "Hódmezővásárhely"} irányába</p>
        <ArrowButton $isBackwards={isBackWards} onClick={()=>{
          setIsBackWards(!isBackWards);
        }}/>
      </DirectionPicker>
    </CardWrapper>
    <InfoText>A Bem utcánál Szeged irányában, a Galamb utcánál Hódmezővásárhely irányában van megálló.</InfoText>
    <CardWrapper>
      <StopList>
        {(isBackWards ? [...stops].reverse() : [...stops]).map(stop=>{
          if(stop.direction && stop.direction !== (isBackWards ? Directions.SZEGED : Directions.HMVHELY)) return null;
          return <li key={stop.localCode}><StyledLink to={stop.code}>{stop.name}</StyledLink></li>
        })}
      </StopList>
    </CardWrapper>
  </Page>
}

const ArrowButton = styled(ArrowDownUp)<{$isBackwards?: boolean}>`
  height: 30px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 300px;
  color:${colors.primary};
  cursor: pointer;
  ${({$isBackwards})=>$isBackwards && `transform: rotate(180deg);`}
  transition: transform .5s;
`

const DirectionPicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
