import styled from "styled-components";
import {borderRadius, boxShadows, colors, spacing} from "../../theme/theme";
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
    :last-child{
      padding-bottom: 0;
    }
  }
`

export const AlertText = styled.p`
  color: ${colors.danger};
  font-style: italic;
`

export const P = styled.p`
  text-align: justify;
  max-width: 600px;
  margin: ${spacing.md};
`

export const CardWrapper = styled.div<{$noPadding?:boolean}>`
  box-shadow: ${boxShadows.lg};
  background-color: ${colors.cardBackgroundLight};
  ${({$noPadding}) => !$noPadding && `padding: ${spacing.md};`}
  margin: ${spacing.lg};
  border-radius: ${borderRadius.lg};

  iframe {
    border-radius: ${borderRadius.lg};
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${colors.cardBackgroundDark};
  }
`