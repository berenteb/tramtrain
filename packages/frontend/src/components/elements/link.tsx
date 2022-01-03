import {Link} from "react-router-dom";
import styled from "styled-components";
import {boxShadows, colors, spacing} from "../../theme/theme";

export const StyledLink = styled(Link)`
  padding: ${spacing.sm} ${spacing.md};
  box-shadow: ${boxShadows.md};
  -webkit-box-shadow: ${boxShadows.md};
  -moz-box-shadow: ${boxShadows.md};
  border-radius: 300px;
  text-decoration: none;
  margin: ${spacing.xs};
  color: ${colors.textColorLight} !important;
  @media (prefers-color-scheme: dark){
    color: ${colors.textColorDark} !important;
  }
`