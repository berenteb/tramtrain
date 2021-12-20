import styled from "styled-components";
import {colors} from "../../theme/theme";
import {useNavigate} from "react-router";
import {ReactNode} from "react";

export const WidgetArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export function Widget({to, children}:{to: string, children: ReactNode}){
    const navigate = useNavigate();
    return <WidgetWrapper onClick={()=>{navigate(to)}}>{children}</WidgetWrapper>
}

const WidgetWrapper = styled.div`
  cursor: pointer;
  background-color: ${colors.primaryTranslucent};
  color: ${colors.primary};
  svg{
    max-height: 100px;
    max-width: 100px;
    stroke: ${colors.primary};
  }
  box-sizing: border-box;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform .2s;
  :hover{
    transform: scale(1.05);
  }
`;