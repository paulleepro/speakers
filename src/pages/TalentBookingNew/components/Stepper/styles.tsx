import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  border-radius: 12px;
  background-color: #221e29;
  padding: 12px 32px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StepItem = styled.div<{ active?: boolean; completed?: boolean }>`
  width: 101px;
  border-radius: 12px;
  border: solid 1px ${colors.purpleLiner};
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  font-weight: ${(props) => (props.active ? 600 : "normal")};
  color: ${(props) => (props.active ? colors.white : colors.midGrey)};

  background-color: ${(props) =>
    props.active ? colors.primaryPurple : "#221e29"};
  border-color: ${(props) =>
    props.active ? colors.primaryPurple : colors.purpleLiner}};
  padding: 6px;
`;

export const StepConnector = styled.span<{ completed?: boolean }>`
  height: 2px;
  background-color: ${(props) =>
    props.completed ? colors.primaryPurple : "#888888"};
  flex: 1 1 auto;
`;
