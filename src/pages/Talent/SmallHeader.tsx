import React, { FC, lazy } from "react";
import { BigText, DescriptionText, Button } from "styles/components";
import { Container, Row, Col, useScreenClass } from "components/Grid";
import ReactHtmlParser from "react-html-parser";
import { ITalent } from "types";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { config } from "config";
import { SmallImageWrapper, FulfilledByText, StyledScrollLink } from "./styles";
import colors from "styles/colors";
import LazyWrapper from "components/LazyWrapper";
import { cutAfterSentenceAt, sanitize } from "./utils";
import HasFavoritedButton from "./components/HasFavoritedButton";
import NotFavoritedButton from "./components/NotFavoritedButton";
import AddToFavoritesButton from "../../components/AddToFavoritesButton";

const AvailableFor = lazy(() => import("components/AvailableFor"));
const KnownFor = lazy(() => import("./KnownFor"));
const SocialIcons = lazy(() => import("components/SocialIcons"));
const StyledImage = lazy(() => import("components/StyledImage"));
const Circles = lazy(() => import("components/Circles"));
const TopLeftGradient = lazy(() => import("components/TopLeftGradient"));

interface IProps {
  talent: ITalent;
}

const SmallHeader: FC<IProps> = ({ talent }) => {
  const screenSize = useScreenClass();
  const {
    id: talentId,
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
              <LazyWrapper>
                <SocialIcons
                  urls={
                    Object.values(social_accounts).filter((x) => x) as string[]
                  }
                  justifyContent="center"
                />
              </LazyWrapper>
            </Box>
          </Col>
        </Row>
      </Container>
      <LazyWrapper>
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
      </LazyWrapper>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <SmallImageWrapper>
              <LazyWrapper>
                <StyledImage
                  alt="talent-img"
                  fallbackSrc="/images/default-profile.svg"
                  borderRadius="20px"
                  src={`${config.imageProxyUrl}${images[0]?.url}`}
                  height={417}
                />
              </LazyWrapper>
            </SmallImageWrapper>
            <Link to={`/talent/${slug}/booking`}>
              <Button margin="30px 0 16px 0" width="100%">
                Book Today
              </Button>
            </Link>
            <AddToFavoritesButton
              talentId={talentId}
              hasFavoritedComponent={HasFavoritedButton}
              notFavoritedComponent={NotFavoritedButton}
            />
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
                View fill bio
              </StyledScrollLink>
            </DescriptionText>
          </Col>
        </Row>
        <LazyWrapper>
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
        </LazyWrapper>
      </Container>
    </>
  );
};

export default SmallHeader;
