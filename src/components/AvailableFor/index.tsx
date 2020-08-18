import React, { FC } from "react";
import { DescriptionText, Divider } from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { productTypes } from "copy";
import { Visible } from "components/Grid";

const Wrapper = styled(Box)`
  position: relative;
  padding-bottom: 20px;
`;

interface IProps {}

const AvailableFor: FC<IProps> = () => {
  return (
    <Wrapper>
      <DescriptionText weight="bold">Available For:</DescriptionText>
      <Divider width="200px" />
      <Box
        backgroundColor={colors.purpleBgFill}
        borderRadius="12px"
        width="100%"
        margin="0 0 16px 0"
        padding="40px 32px"
        justifyContent="center"
        border={`1px solid ${colors.purpleLiner}`}
      >
        {productTypes.map(({ title, description }, i) => (
          <div key={`available-for-${i}`}>
            <DescriptionText
              cursor="default"
              margin={i === 0 ? "0" : "32px 0 0 0"}
              data-tip
              data-for={`panel-discussion-${i}`}
            >
              {title}
            </DescriptionText>
            <Visible md lg>
              <ReactTooltip
                id={`panel-discussion-${i}`}
                place="right"
                type="dark"
                effect="float"
                className="tooltip"
                backgroundColor="#000"
                border
                borderColor="#2c2832"
              >
                {description}
              </ReactTooltip>
            </Visible>
          </div>
        ))}
      </Box>
    </Wrapper>
  );
};

export default AvailableFor;
