import React, { FC } from "react";
import {
  VirtualText,
  BigText,
  DescriptionText,
  StyledImage,
  Button,
} from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import ReactHtmlParser from "react-html-parser";
import AvailableFor from "../shared/AvailableFor";
import KnownFor from "./KnownFor";
import { ITalent } from "types";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { config } from "config";
import { getHighlight } from "./MediumHeader";

interface IProps {
  talent: ITalent;
}

const SmallHeader: FC<IProps> = ({ talent }) => {
  const {
    name,
    bio_highlights: highlights,
    titles,
    media: { images },
    slug,
  } = talent;

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <BigText margin="24px 0">{name}</BigText>
            <VirtualText margin="0 0 24px">Featured</VirtualText>
            <StyledImage
              borderRadius="20px"
              src={`${config.imageProxyUrl}${images[0]?.url}`}
              height={417}
            />
            <Link to={`/talent/${slug}/booking`}>
              <Button margin="40px 0 0 0" width="100%">
                Book Today
              </Button>
            </Link>
            <DescriptionText>
              {ReactHtmlParser(getHighlight(highlights))}
            </DescriptionText>
            <Box margin="40px 0">
              <AvailableFor />
            </Box>
            <KnownFor bulletPoints={titles} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SmallHeader;
