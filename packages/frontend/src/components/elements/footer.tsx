import styled from "styled-components";
import {colors, spacing} from "../../theme/theme";

export function Footer(){
    return <FooterWrapper>
        <p>&copy; Bálint Berente, 2021.</p>
    </FooterWrapper>
}

const FooterWrapper = styled.div`
  color: white;
  background-color: ${colors.primary};
  width: 100%;
  box-sizing: border-box;
  padding: ${spacing.lg};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`