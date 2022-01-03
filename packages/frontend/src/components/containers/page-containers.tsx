import styled from "styled-components";
import {colors, fontSize} from "../../theme/theme";

export const Body = styled.div`
  margin: 0;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${colors.backgroundLight};
  color: ${colors.textColorLight};

  p {
    font-size: ${fontSize.sm};
  }

  h1 {
    font-size: ${fontSize.xl};
    font-weight: lighter;
  }

  h2 {
    font-size: ${fontSize.lg};
    font-weight: lighter;
  }

  h3 {
    font-size: ${fontSize.md};
    font-weight: lighter;
  }

  a {
    color: ${colors.primary};
  }
  @media (prefers-color-scheme: dark){
    background-color: ${colors.backgroundDark};
    color: ${colors.textColorDark};
  }
`;

export enum PageAlignment{
    TOP="top",
    CENTER="center",
    BOTTOM="bottom",
}

export const Page = styled.div<{$alignment?:PageAlignment}>`
  width: 100%;
  max-width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({$alignment})=>{switch($alignment){
    case PageAlignment.TOP:
        return "flex-start";
    case PageAlignment.BOTTOM:
      return "flex-end";
    default:
      return "center";
  }}};
  text-align: center;
`;
