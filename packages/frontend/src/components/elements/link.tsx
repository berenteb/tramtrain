import {Link} from "react-router-dom";
import styled from "styled-components";
import {boxShadows, spacing} from "../../theme/theme";

export const StyledLink = styled(Link)`
  padding: ${spacing.sm} ${spacing.md};
  box-shadow: ${boxShadows.md};
  -webkit-box-shadow: ${boxShadows.md};
  -moz-box-shadow: ${boxShadows.md};
  border-radius: 300px;
  text-decoration: none;
  color: black !important;
  margin: ${spacing.xs};
`