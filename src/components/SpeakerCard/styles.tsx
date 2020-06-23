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
  line-height: 1.5;
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
  margin-top: 20px;
  background-color: ${colors.purpleLiner};
  border-radius: 20px;
  border: solid 1px #222222;

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
