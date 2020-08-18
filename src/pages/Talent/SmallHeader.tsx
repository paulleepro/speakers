import React, { FC } from "react";
import { BigText, DescriptionText, Button } from "styles/components";
import { Container, Row, Col, useScreenClass } from "components/Grid";
import ReactHtmlParser from "react-html-parser";
import AvailableFor from "components/AvailableFor";
import KnownFor from "./KnownFor";
import { ITalent } from "types";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { config } from "config";
import SocialIcons from "components/SocialIcons";
import StyledImage from "components/StyledImage";
import { SmallImageWrapper, FulfilledByText, StyledScrollLink } from "./styles";
import Circles from "components/Circles";
import colors from "styles/colors";
import TopLeftGradient from "components/TopLeftGradient";
import { cutAfterSentenceAt, sanitize } from "./utils";

interface IProps {
  talent: ITalent;
}

const SmallHeader: FC<IProps> = ({ talent }) => {
  const screenSize = useScreenClass();
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
            <BigText margin="40px 0 0">{name}</BigText>
          </Col>
        </Row>
        <Row>
          <Col offset={{ sm: 1, xs: 0 }} sm={10} xs={12}>
            <Box flexDirection="row" justifyContent="center">
              <SocialIcons
                urls={
                  Object.values(social_accounts).filter((x) => x) as string[]
                }
                justifyContent="center"
              />
            </Box>
          </Col>
        </Row>
      </Container>
      <Circles
        color={colors.purpleLiner}
        top="50px"
        size={50}
        maxWidth="400px"
        zIndex="0"
      />
      <TopLeftGradient
        height={screenSize === "xs" ? "1500px" : "1400px"}
        width="100%"
        borderRadius="600px"
      />
      <Container fluid>
        <Row>
          <Col xs={12}>
            <SmallImageWrapper>
              <StyledImage
                alt="talent-img"
                fallbackSrc="/images/default-profile.svg"
                borderRadius="20px"
                src={`${config.imageProxyUrl}${images[0]?.url}`}
                height={417}
              />
            </SmallImageWrapper>
            <Link to={`/talent/${slug}/booking`}>
              <Button margin="40px 0 0 0" width="100%">
                Book Today
              </Button>
            </Link>
            <FulfilledByText>
              Fulfilled by{" "}
              <span className="talent-agency">Harry Walker Agency</span>
            </FulfilledByText>
          </Col>
        </Row>
        <Row>
          <Col>
            <DescriptionText>
              {ReactHtmlParser(cutAfterSentenceAt(350, sanitize(highlights)))}
              <StyledScrollLink
                to="bio"
                spy={true}
                smooth={true}
                offset={-10}
                duration={700}
                delay={300}
              >
                See More
              </StyledScrollLink>
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
