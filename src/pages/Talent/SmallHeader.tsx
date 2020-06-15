import React, { FC } from "react";
import {
  VirtualText,
  BigText,
  DescriptionText,
  Button,
} from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import ReactHtmlParser from "react-html-parser";
import AvailableFor from "components/AvailableFor";
import KnownFor from "./KnownFor";
import { ITalent } from "types";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { config } from "config";
import { getHighlight } from "./MediumHeader";
import SocialIcons from "components/SocialIcons";
import StyledImage from "components/StyledImage";

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
    social_accounts,
  } = talent;

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <BigText margin="24px 0">{name}</BigText>
            <VirtualText margin="0 0 24px">Featured</VirtualText>
            <SocialIcons
              urls={
                Object.values(social_accounts).filter(
                  (x) => x !== undefined
                ) as string[]
              }
              justifyContent="center"
            />
            <StyledImage
              alt="talent-img"
              fallbackSrc="/images/default-profile.svg"
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
          </Col>
        </Row>
        <Row>
          <Col>
            <Box margin="40px 0">
              <AvailableFor />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <KnownFor bulletPoints={titles} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SmallHeader;
