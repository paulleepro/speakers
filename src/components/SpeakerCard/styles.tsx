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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: ${colors.purpleLiner};
  border-radius: 20px;
`;
