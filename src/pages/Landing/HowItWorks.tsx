import React, { FC, lazy } from "react";
import { Row, Col } from "components/Grid";
import {
  HowItWorksImageWrapper,
  HowItWorksImage,
  CustomizeWrapper,
} from "./styles";
import { HeaderText, StyledContainer } from "styles/components";
import LazyWrapper from "components/LazyWrapper";

const Step = lazy(() => import("./Step"));
const StyledImage = lazy(() => import("components/StyledImage"));

const HowItWorks: FC = () => {
  return (
    <CustomizeWrapper>
      <StyledContainer fluid>
        <Row>
          <Col lg={5} md={4} sm={6} xs={12}>
            <HowItWorksImageWrapper>
              <HowItWorksImage>
                <LazyWrapper>
                  <StyledImage
                    src="/images/how-it-works-collage.png"
                    alt="how-it-works"
                  />
                </LazyWrapper>
              </HowItWorksImage>
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
            <LazyWrapper>
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
            </LazyWrapper>
          </Col>
        </Row>
      </StyledContainer>
    </CustomizeWrapper>
  );
};

export default HowItWorks;
