import React, { FC, useState } from "react";
import { Row, Col } from "components/Grid";
import {
  HeaderText,
  DescriptionText,
  Divider,
  StyledContainer,
} from "styles/components";
import { Box } from "react-basic-blocks";
import ReactHtmlParser from "react-html-parser";
import { BioText } from "./styles";
import colors from "styles/colors";
import { sanitize, cutAfterSentenceAt } from "./utils";

interface IProps {
  highlights: string;
  details: string;
}

const Bio: FC<IProps> = ({ highlights, details }) => {
  const sanitizedHighlights = sanitize(highlights);
  const sanitizedDetails = sanitize(details);
  const [moreHighlights, setMoreHighlights] = useState<boolean>(false);
  const [moreDetails, setMoreDetails] = useState<boolean>(false);

  const cleanHighlights = moreHighlights
    ? sanitizedHighlights
    : cutAfterSentenceAt(600, sanitizedHighlights);
  const cleanDetails = moreDetails
    ? sanitizedDetails
    : cutAfterSentenceAt(600, sanitizedDetails);
  return (
    <StyledContainer fluid id="bio">
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <HeaderText margin="0">Full Biography</HeaderText>
        </Col>
      </Row>
      <Row>
        <Col offset={{ lg: 1 }} xs={12} md={6} lg={5}>
          <Box margin="30px 0">
            <DescriptionText weight="bold">Highlights</DescriptionText>
            <Divider width="200px" />
            <BioText>{ReactHtmlParser(cleanHighlights)}</BioText>
            {moreHighlights ? null : (
              <BioText
                onClick={() => setMoreHighlights(true)}
                color={colors.primaryPurple}
                cursor="pointer"
              >
                <u>See More</u>
              </BioText>
            )}
          </Box>
        </Col>
        <Col offset={{ md: 1 }} xs={12} md={5} lg={4}>
          <Box margin="30px 0">
            <DescriptionText weight="bold">Background</DescriptionText>
            <Divider width="200px" />
            <BioText>{ReactHtmlParser(cleanDetails)}</BioText>
            {moreDetails ? null : (
              <BioText
                onClick={() => setMoreDetails(true)}
                color={colors.primaryPurple}
                cursor="pointer"
              >
                <u>See More</u>
              </BioText>
            )}
          </Box>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Bio;
