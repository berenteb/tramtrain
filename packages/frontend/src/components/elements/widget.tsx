import styled from "styled-components";
import {colors} from "../../theme/theme";
import {useNavigate} from "react-router";
import {ReactNode} from "react";
import {CardWrapper} from "./basic";

export const WidgetArea = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export function Widget({to, children}:{to: string, children: ReactNode}){
    const navigate = useNavigate();
    return <WidgetWrapper onClick={()=>{navigate(to)}}>{children}</WidgetWrapper>
}

const WidgetWrapper = styled(CardWrapper)`
  cursor: pointer;
  .icon{
    height: 100px;
    width: 100px;
    color: ${colors.primary};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform .2s;
  :hover{
    transform: scale(1.05);
  }
  overflow: hidden;
  p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
  }
`;