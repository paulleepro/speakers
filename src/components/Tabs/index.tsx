import React, { FC } from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import colors from "styles/colors";

interface ITabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const StyledTabsContainer = styled.div`
  max-width: calc(100vw - 24px);
  overflow-x: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
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

const StyledTab = styled.div<{ active?: boolean }>`
  border-bottom: ${(props) =>
    props.active ? `2px solid ${colors.primaryPurple}` : undefined};
  cursor: pointer;
  width: fit-content;
`;

interface TabProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  values: string[];
}

const Tabs: FC<TabProps> = ({ activeTab, setActiveTab, values }) => {
  return (
    <StyledTabsContainer>
      <Swiper {...{ slidesPerView: "auto", spaceBetween: 30 }}>
        {values.map((tabValue, i) => (
          <StyledTab
            key={`tab_${tabValue}`}
            active={activeTab === i}
            onClick={() => setActiveTab(i)}
          >
            <StyledText>{tabValue}</StyledText>
          </StyledTab>
        ))}
      </Swiper>
    </StyledTabsContainer>
  );
};

export default Tabs;
