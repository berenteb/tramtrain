import styled from "styled-components";
import { fontSize } from "../../theme/theme";

export const Body = styled.div`
  margin: 0;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
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
`;

export const Page = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
