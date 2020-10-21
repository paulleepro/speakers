import React, { FC, lazy, useState } from "react";
import {
  BigText,
  DescriptionText,
  Button,
  StyledContainer,
} from "styles/components";
import { Row, Col } from "components/Grid";
import ReactHtmlParser from "react-html-parser";
import { Box } from "react-basic-blocks";
import { ITalent } from "types";
import { Link } from "react-router-dom";
import { config } from "config";
import colors from "styles/colors";
import LazyWrapper from "components/LazyWrapper";
import {
  KnownForWrapper,
  FulfilledByText,
  StyledScrollLink,
  AddButton,
} from "./styles";
import { sanitize, cutAfterSentenceAt } from "./utils";

const SaveFavoritesListModal = lazy(() =>
  import("components/SaveFavoritesListModal")
);
const AvailableFor = lazy(() => import("components/AvailableFor"));
const KnownFor = lazy(() => import("./KnownFor"));
const SocialIcons = lazy(() => import("components/SocialIcons"));
const StyledImage = lazy(() => import("components/StyledImage"));
const Circles = lazy(() => import("components/Circles"));
const TopLeftGradient = lazy(() => import("components/TopLeftGradient"));

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
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const {
    name,
    bio_highlights: highlights,
    titles,
    media: { images },
    slug,
    social_accounts,
  } = talent;

  const toggleAddModal = () => {
    setShowAddModal((prev) => !prev);
  };

  return (
    <>
      <Box height="65px" />
      <LazyWrapper>
        <Circles
          color={colors.purpleLiner}
          top="50px"
          size={25}
          maxWidth="400px"
          zIndex="0"
        />
        <TopLeftGradient height="1200px" width="50%" borderRadius="600px" />
      </LazyWrapper>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={3} md={4}>
            <LazyWrapper>
              <StyledImage
                alt="talent-img"
                fallbackSrc="/images/default-profile.svg"
                borderRadius="20px"
                src={`${config.imageProxyUrl}${images[0]?.url}`}
                height={417}
              />
            </LazyWrapper>
            <Link to={`/talent/${slug}/booking-new`}>
              <Button margin="30px 0 16px 0" width="100%">
                Create Booking Request
              </Button>
            </Link>
            <AddButton onClick={toggleAddModal}>
              <img
                src="/images/star-white-outline.png"
                alt="star-outline"
                width="24"
                height="24"
              />
              Add to Favorites List
            </AddButton>
            <FulfilledByText>
              Fulfilled by{" "}
              <span className="talent-agency">Harry Walker Agency</span>
            </FulfilledByText>
          </Col>
          <Col offset={{ md: 1 }} lg={6} md={7}>
            <Box flexDirection="row" justifyContent="flex-end">
              <LazyWrapper>
                <SocialIcons
                  urls={
                    Object.values(social_accounts).filter((x) => x) as string[]
                  }
                  margin="0px"
                />
              </LazyWrapper>
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
            <LazyWrapper>
              <Col offset={{ lg: 1 }} lg={3} md={4}>
                <AvailableFor />
              </Col>
              <Col offset={{ md: 1 }} lg={5} md={7}>
                <KnownFor bulletPoints={titles} />
              </Col>
            </LazyWrapper>
          </Row>
        </StyledContainer>
      </KnownForWrapper>
      <SaveFavoritesListModal show={showAddModal} onClose={toggleAddModal} />
    </>
  );
};

export default MediumHeader;
