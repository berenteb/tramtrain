import styled from "styled-components";
import { Page } from "../containers/page-containers";
import { colors } from "../../theme/theme";

export function LoaderIcon() {
  return (
    <LoaderIconWrapper className="loadingio-spinner-dual-ring-4k76zvahs4k">
      <div className="ldio-rfi4a6kxgqo">
        <div />
        <div>
          <div />
        </div>
      </div>
    </LoaderIconWrapper>
  );
}

const LoaderIconWrapper = styled.div`
  width: 124px;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: none;
  @keyframes ldio-rfi4a6kxgqo {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .ldio-rfi4a6kxgqo div {
    box-sizing: border-box !important;
  }
  .ldio-rfi4a6kxgqo > div {
    position: absolute;
    width: 55.8px;
    height: 55.8px;
    top: 34.1px;
    left: 34.1px;
    border-radius: 50%;
    border: 6.2px solid #000;
    border-color: ${colors.primary} transparent ${colors.primary} transparent;
    animation: ldio-rfi4a6kxgqo 1s linear infinite;
  }
  .ldio-rfi4a6kxgqo > div:nth-child(2) {
    border-color: transparent;
  }
  .ldio-rfi4a6kxgqo > div:nth-child(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
  .ldio-rfi4a6kxgqo > div:nth-child(2) div:before,
  .ldio-rfi4a6kxgqo > div:nth-child(2) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 6.2px;
    height: 6.2px;
    top: -6.2px;
    left: 18.6px;
    background: ${colors.primary};
    border-radius: 50%;
    box-shadow: 0 49.6px 0 0 ${colors.primary};
  }
  .ldio-rfi4a6kxgqo > div:nth-child(2) div:after {
    left: -6.2px;
    top: 18.6px;
    box-shadow: 49.6px 0 0 0 ${colors.primary};
  }
  .ldio-rfi4a6kxgqo {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-rfi4a6kxgqo div {
    box-sizing: content-box;
  }
`;

export function LoadingPage() {
  return (
    <LoadingPageWrapper>
      <LoaderIcon />
    </LoadingPageWrapper>
  );
}

const LoadingPageWrapper = styled(Page)`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
