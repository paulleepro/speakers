import React, { FC, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { DescriptionText, HeaderText } from "styles/components";
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
      padding="0 32px"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      cursor="pointer"
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
    <Container fluid>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <Box margin="80px 0 30px">
            <HeaderText>Full Biography</HeaderText>
          </Box>
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
    </Container>
  );
};

export default Bio;
