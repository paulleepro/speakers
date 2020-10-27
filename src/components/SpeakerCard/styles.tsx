import styled from "styled-components";
import colors from "styles/colors";

export const SpeakerName = styled.span`
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: #ffffff;
  overflow: hidden;
  line-clamp: 2;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;

export const SpeakerDesc = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.2px;
  color: ${colors.midGrey};
  overflow: hidden;
  line-clamp: 2;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  background-color: ${colors.purpleLiner};
  border-radius: 20px;
  border: solid 1px #222222;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);

  animation: pulse 1.5s 1;

  @keyframes pulse {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SpeakerInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 20px 20px;
  border-top: 4px solid ${colors.primaryPurple};
  background-color: ${colors.purpleBgFill};
  padding: 18px 16px;

  @media (max-width: 767px) {
    padding: 8px 16px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ImageOverlay = styled.img`
  width: 86px;
  height: 36px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

export const StarWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 6px;
  left: 16px;

  @media (max-width: 767px) {
    left: 8px;
  }

  svg {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.65));
  }
`;
