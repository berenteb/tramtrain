import styled from "styled-components";
import {borderRadius, colors} from "../../theme/theme";
import StopDot from "../../assets/stop_dot.svg"

export const StyledImage = styled.img<{ $rounded?: boolean }>`
  max-height: 100px;
  height: auto;
  width: auto;
  margin: auto;
  ${({ $rounded }) => $rounded && `border-radius: ${borderRadius.lg};`}
`;

export const InfoText = styled.p`
  font-style: italic;
  color: dimgray;
`

export const StopList = styled.ul`
  text-align: left;
  list-style-type: none;
  li{
    position:relative;
    padding-bottom: 50px;
    ::after{
      content: url(${StopDot});
      position: absolute;
      left: -25px; /*adjust manually*/
      top: 0;
    }
    ::before{
      content:"";
      position: absolute;
      left: -25px; /* adjust manually */
      border-left: 20px solid ${colors.primaryTranslucent};
      height: 100%;
      top: 10px;
    }
    :last-child::before{
      border-left:none;
    }
  }
`

export const AlertText = styled.p`
  color: ${colors.danger};
  font-style: italic;
`