import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { Container, Row, Col } from "react-grid-system";
import Step from "./Step";
import colors from "styles/colors";
import { HowItWorksImageWrapper, HowItWorksImage } from "./styles";
import StyledImage from "components/StyledImage";
import Circles from "components/Circles";
import { HeaderText } from "styles/components";

const HowItWorks: FC = () => {
  return (
    <Box margin="160px 0 0 0">
      <Container fluid>
        <Row>
          <Col lg={5} md={4} sm={6} xs={12}>
            <HowItWorksImageWrapper>
              <HowItWorksImage>
                <StyledImage
                  src="/images/how-it-works-collage.png"
                  alt="how-it-works"
                />
              </HowItWorksImage>
              <Circles color={colors.primaryPurple} top="-30%" />
            </HowItWorksImageWrapper>
          </Col>
          <Col
            offset={{ md: 1, sm: 0 }}
            lg={5}
            md={6}
            sm={6}
            xs={12}
            style={{ zIndex: 2 }}
          >
            <HeaderText margin="0 0 72px 0">How It Works</HeaderText>
            <Step
              imageUrl="/images/swipe.png"
              step="Browse Talent"
              description="Choose from our selection of high-profile talent from a variety of industries for your specific digital event."
            />
            <Step
              imageUrl="/images/contract.png"
              step="Book Your Talent"
              description="Simply make your selection based on your business' needs."
            />
            <Step
              imageUrl="/images/profile.png"
              step="Create Your Event"
              description="Now that you've selected your talent, share your event details and we'll take it from there."
            />
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default HowItWorks;
