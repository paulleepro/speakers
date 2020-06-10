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
import { Box } from "react-basic-blocks";
import { ITalent } from "types";
import { Link } from "react-router-dom";
import { config } from "config";
import colors from "styles/colors";

interface IProps {
  talent: ITalent;
}

export const getHighlight = (str: string) => {
  const res = str
    .split("</p>")[0]
    ?.trim()
    .replace(/<p>/g, "")
    .match(/.{1,350}(\s|$)/g);
  const unescaped = res === null ? "" : res[0].slice(0, -1);
  return `${unescaped}<span>… </span><a href="#highlights" style="color: ${colors.primaryPurple}">Read More</a>`;
};

const MediumHeader: FC<IProps> = ({ talent }) => {
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
          <Col offset={{ lg: 1 }} lg={3} md={4}>
            <StyledImage
              borderRadius="20px"
              src={`${config.imageProxyUrl}${images[0]?.url}`}
              height={417}
            />
            <Link to={`/talent/${slug}/booking`}>
              <Button margin="30px 0" width="100%">
                Book Today
              </Button>
            </Link>
          </Col>
          <Col offset={{ md: 1 }} lg={6} md={7}>
            <Box margin="0 0 50px 0">
              <VirtualText>Featured</VirtualText>
              <BigText>{name}</BigText>
              <DescriptionText>
                {ReactHtmlParser(getHighlight(highlights))}
              </DescriptionText>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} lg={3} md={4}>
            <AvailableFor />
          </Col>
          <Col offset={{ md: 1 }} lg={5} md={7}>
            <KnownFor bulletPoints={titles} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MediumHeader;
