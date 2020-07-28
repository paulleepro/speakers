import React, { FC, useState } from "react";
import { Row, Col } from "components/Grid";
import {
  DescriptionText,
  HeaderText,
  StyledContainer,
} from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ReactHtmlParser from "react-html-parser";
import { AccordionTextBox } from "./styles";

interface IAIProps {
  title: string;
  hidden: boolean;
  hide: (hidden: boolean) => void;
}

const AccordionItem: FC<IAIProps> = ({ title, hide, hidden }) => {
  return (
    <Box
      backgroundColor={colors.purpleBgFill}
      width="100%"
      height="85px"
      margin="40px 0 0 0"
      padding="0 32px"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      cursor="pointer"
      borderRadius="12px"
      onClick={() => hide(!hidden)}
    >
      <DescriptionText color={colors.white}>{title}</DescriptionText>
      {hidden ? (
        <AddIcon style={{ color: colors.primaryPurple }} fontSize="large" />
      ) : (
        <RemoveIcon style={{ color: colors.primaryPurple }} fontSize="large" />
      )}
    </Box>
  );
};

interface IProps {
  highlights: string;
  details: string;
}

const Bio: FC<IProps> = ({ highlights, details }) => {
  const [highlightsHidden, setHighlightsHidden] = useState<boolean>(false);
  const [detailsHidden, setDetailsHidden] = useState<boolean>(true);
  return (
    <StyledContainer fluid>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <div id="highlights">
            <Box margin="80px 0 0 0">
              <HeaderText>Full Biography</HeaderText>
            </Box>
          </div>
        </Col>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <AccordionItem
            title="Highlights"
            hidden={highlightsHidden}
            hide={setHighlightsHidden}
          />
        </Col>
        <Col offset={{ lg: 2, md: 1 }} xs={12} md={10} lg={8}>
          <AccordionTextBox height={highlightsHidden ? "0px" : "auto"}>
            <DescriptionText color={colors.midGrey}>
              {ReactHtmlParser(highlights)}
            </DescriptionText>
          </AccordionTextBox>
        </Col>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <AccordionItem
            title="Background"
            hidden={detailsHidden}
            hide={setDetailsHidden}
          />
        </Col>
        <Col offset={{ lg: 2, md: 1 }} xs={12} md={10} lg={8}>
          <AccordionTextBox height={detailsHidden ? "0px" : "auto"}>
            <DescriptionText color={colors.midGrey}>
              {ReactHtmlParser(details)}
            </DescriptionText>
          </AccordionTextBox>
        </Col>
      </Row>
      <Row>
        <Box height="80px" />
      </Row>
    </StyledContainer>
  );
};

export default Bio;
