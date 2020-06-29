import React, { FC } from "react";
import {
  FooterWrapper,
  FooterLink,
  InfoText,
  ImageWrapper,
  FooterAnchor,
} from "./styles";
import { Row, Col, Visible } from "react-grid-system";
import { Link } from "react-router-dom";
import { Box } from "react-basic-blocks";
import { hardCodedTalent } from "hard-coded-talent";
// import SocialIcons from "components/SocialIcons";
import { StyledContainer } from "styles/components";

interface IProps {}

const Footer: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <StyledContainer fluid>
        <Row>
          <Col>
            <Box margin="40px 0" />
          </Col>
        </Row>
        <Row>
          <Col offset={{ xs: 1 }} xs={11} sm={6} md={6} lg={4}>
            <Row>
              <Col xs={12} md={6}>
                <FooterLink to="/explore">Browse Speakers</FooterLink>
                {hardCodedTalent
                  .filter((x) => x.url)
                  .map(({ url, name }, i) => (
                    <FooterLink to={url || "/"} key={`fotter-link-${i}`}>
                      {name}
                    </FooterLink>
                  ))}
              </Col>
              <Col xs={12} md={6}>
                <FooterLink to="/how-it-works">How It Works</FooterLink>
                <FooterLink to="/faq">FAQ</FooterLink>
              </Col>
            </Row>
          </Col>
          <Col offset={{ xs: 1, sm: 0 }} xs={11} sm={5} md={4} lg={6}>
            <Row>
              <Col xs={12} md={6} lg={8}>
                <FooterAnchor
                  target="_mail"
                  href="mailto:contact@wmespeakersbeta.com"
                >
                  Contact Us
                </FooterAnchor>
              </Col>
              <Col xs={12} md={6} lg={4}>
                {/* <InfoText>Connect With Us</InfoText>
                <SocialIcons
                  urls={["https://instagram.com", "https://twitter.com"]}
                /> */}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box margin="55px 0" />
          </Col>
        </Row>

        <Row align="center">
          <Col offset={{ md: 1 }} xs={12} md={2}>
            <ImageWrapper>
              <Link to="/">
                <img src="/logo.png" height="40" alt="logo" />
              </Link>
            </ImageWrapper>
          </Col>
          <Col xs={12} md={8}>
            <Row align="center">
              <Col xs={12} lg={7}>
                <Box>
                  <InfoText>
                    {`© ${new Date().getFullYear()} Endeavor Operating Company, LLC.`}
                    <Visible xs>
                      <br />
                    </Visible>
                    All rights reserved.
                  </InfoText>
                </Box>
              </Col>
              <Col xs={12} lg={5}>
                <Box>
                  <InfoText>
                    <a href="http://www.wmeagency.com/tos/" target="_terms">
                      Terms & Conditions
                    </a>
                    {" | "}
                    <a
                      href="http://www.wmeagency.com/privacypolicy"
                      target="_terms"
                    >
                      Privacy Policy
                    </a>
                    <Visible sm md lg>
                      {" | "}
                    </Visible>
                    <Visible xs>
                      <br />
                    </Visible>
                    <a
                      href="http://www.wmeagency.com/cookiepolicy/"
                      target="_terms"
                    >
                      Cookie Policy
                    </a>
                  </InfoText>
                </Box>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box margin="30px 0" />
          </Col>
        </Row>
      </StyledContainer>
    </FooterWrapper>
  );
};

export default Footer;
