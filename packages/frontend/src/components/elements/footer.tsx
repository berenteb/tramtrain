import styled from "styled-components";
import {colors, spacing} from "../../theme/theme";
import {CenteredFlex} from "../containers/flex-containers";

export function Footer(){
    return <FooterWrapper>
        <CenteredFlex>
            <p>&copy; Bálint Berente, 2021.</p>
        </CenteredFlex>
    </FooterWrapper>
}

const FooterWrapper = styled.div`
  color: white;
  background-color: ${colors.primary};
  width: 100%;
  box-sizing: border-box;
  padding: ${spacing.lg};
`