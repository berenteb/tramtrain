import styled from "styled-components";
import {ChevronLeft} from "@styled-icons/bootstrap/ChevronLeft"
import {colors, spacing} from "../../theme/theme";
import {Link} from "react-router-dom";
import {ReactNode} from "react";

export function BackButton({to, children}:{to: string, children: ReactNode}){
    return <BackButtonLink to={to} replace><Arrow/>{children}</BackButtonLink>
}

const Arrow = styled(ChevronLeft)`
  height: 30px;
  color: ${colors.primary};
  margin-right: 10px;
`

const BackButtonLink = styled(Link)`
  margin: ${spacing.lg};
  text-decoration: none;
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: center;
`