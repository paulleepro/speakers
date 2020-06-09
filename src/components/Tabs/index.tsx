import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import styled from "styled-components";
import colors from "styles/colors";

interface ITabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  overflow-x: scroll;
  div + div {
    margin-left: 30px;
  }
`;

const StyledText = styled.span`
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  margin-bottom: 5px;
  padding: 0 5px;
  white-space: nowrap;
`;

const Tab: FC<ITabProps> = ({ label, active, onClick }) => (
  <Box
    borderBottom={active ? `2px solid ${colors.primaryPurple}` : undefined}
    onClick={onClick}
    cursor="pointer"
  >
    <StyledText>{label}</StyledText>
  </Box>
);

interface TabProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  values: string[];
}

const Tabs: FC<TabProps> = ({ activeTab, setActiveTab, values }) => {
  return (
    <StyledContainer>
      {values.map((tabValue, i) => (
        <Tab
          key={`tab_${tabValue}`}
          label={tabValue}
          active={activeTab === i}
          onClick={() => setActiveTab(i)}
        />
      ))}
    </StyledContainer>
  );
};

export default Tabs;
