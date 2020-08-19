import React, { FC } from "react";
import {
  BigText,
  DescriptionText,
  Button,
  StyledContainer,
} from "styles/components";
import { Row, Col } from "components/Grid";
import ReactHtmlParser from "react-html-parser";
import AvailableFor from "components/AvailableFor";
import KnownFor from "./KnownFor";
import { Box } from "react-basic-blocks";
import { ITalent } from "types";
import { Link } from "react-router-dom";
import { config } from "config";
import colors from "styles/colors";
import SocialIcons from "components/SocialIcons";
import StyledImage from "components/StyledImage";
import { KnownForWrapper, FulfilledByText, StyledScrollLink } from "./styles";
import Circles from "components/Circles";
import TopLeftGradient from "components/TopLeftGradient";
import { sanitize, cutAfterSentenceAt } from "./utils";

interface IProps {
  talent: ITalent;
}

export const getHighlight = (str: string) => {
  const res = str
    .split("</p>")
    .map((x) => x.trim().replace(/<p>/g, ""))
    .filter((x) => x)[0]
    ?.trim()
    .match(/.{1,350}(\s|$)/g);
  const unescaped =
    res === null || res === undefined ? "" : res[0].slice(0, -1).trim();
  return unescaped
    ? `${unescaped}<span>… </span><a href="#highlights" style="color: ${colors.primaryPurple}">Read More</a>`
    : "";
};

const MediumHeader: FC<IProps> = ({ talent }) => {
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
      <Box height="65px" />
      <Circles
        color={colors.purpleLiner}
        top="50px"
        size={25}
        maxWidth="400px"
        zIndex="0"
      />
      <TopLeftGradient height="1200px" width="50%" borderRadius="600px" />
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={3} md={4}>
            <StyledImage
              alt="talent-img"
              fallbackSrc="/images/default-profile.svg"
              borderRadius="20px"
              src={`${config.imageProxyUrl}${images[0]?.url}`}
              height={417}
            />
            <Link to={`/talent/${slug}/booking`}>
              <Button margin="30px 0 0 0" width="100%">
                Book Today
              </Button>
            </Link>
            <FulfilledByText>
              Fulfilled by{" "}
              <span className="talent-agency">Harry Walker Agency</span>
            </FulfilledByText>
          </Col>
          <Col offset={{ md: 1 }} lg={6} md={7}>
            <Box flexDirection="row" justifyContent="flex-end">
              <SocialIcons
                urls={
                  Object.values(social_accounts).filter((x) => x) as string[]
                }
                margin="0px"
              />
            </Box>
            <BigText>{name}</BigText>
            <DescriptionText>
              {ReactHtmlParser(cutAfterSentenceAt(350, sanitize(highlights)))}
            </DescriptionText>
            <StyledScrollLink
              to="bio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              delay={300}
            >
              View full bio
            </StyledScrollLink>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} lg={3} md={4}>
            <Box margin="45px 0 0 0" />
          </Col>
        </Row>
      </StyledContainer>
      <KnownForWrapper>
        <StyledContainer fluid>
          <Row>
            <Col offset={{ lg: 1 }} lg={3} md={4}>
              <AvailableFor />
            </Col>
            <Col offset={{ md: 1 }} lg={5} md={7}>
              <KnownFor bulletPoints={titles} />
            </Col>
          </Row>
        </StyledContainer>
      </KnownForWrapper>
    </>
  );
};

export default MediumHeader;
