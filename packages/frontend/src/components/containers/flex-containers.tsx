import styled from "styled-components";
import { spacing } from "../../theme/theme";

export const Flex = styled.div<{
  $direction?: "row" | "column";
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "column"};
`;

export const CenteredFlex = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;
`;

export const SpacedFlex = styled(Flex)`
  justify-content: space-between;
  * {
    margin: ${spacing.sm};
  }
  p:first-child {
    text-align: left;
  }
  p {
    text-align: center;
  }
  p:last-child {
    text-align: right;
  }
`;
