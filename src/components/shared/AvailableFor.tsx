import React, { FC } from "react";
import { DescriptionText, Divider } from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";

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
    <Box>
      <DescriptionText>Available For:</DescriptionText>
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
        >
          <DescriptionText>{x}</DescriptionText>
        </Box>
      ))}
    </Box>
  );
};

export default AvailableFor;
