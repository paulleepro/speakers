import React, { FC } from "react";
import { DescriptionText, Divider } from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import styled from "styled-components";

const Wrapper = styled(Box)`
  position: relative;
  padding-bottom: 20px;
`;

const AvailableForBg = styled.div`
  position: absolute;
  bottom: 0;
  left: -100%;
  border-radius: 0 0 600px 0;
  background-image: linear-gradient(
    to bottom,
    rgba(34, 30, 41, 0),
    ${colors.purpleBgFill}
  );
  z-index: -1;
  width: 300%;
  height: 100%;

  @media (max-width: 1023px) {
    left: 0;
    width: 100%;
  }
`;

interface IProps {}

const categories = [
  "Keynote",
  "Panel Discussion",
  "Digital Q&A",
  "Live Drop In",
  "Video Message",
];

const AvailableFor: FC<IProps> = () => {
  return (
    <Wrapper>
      <AvailableForBg />
      <DescriptionText weight="bold">Available For:</DescriptionText>
      <Divider width="200px" />
      {categories.map((x, i) => (
        <Box
          key={`available-for-${i}`}
          backgroundColor={colors.purpleBgFill}
          borderRadius="12px"
          width="100%"
          height="85px"
          margin="0 0 16px 0"
          padding="0 0 0 20px"
          justifyContent="center"
          border={`1px solid ${colors.purpleLiner}`}
        >
          <DescriptionText>{x}</DescriptionText>
        </Box>
      ))}
    </Wrapper>
  );
};

export default AvailableFor;
