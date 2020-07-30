import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { Row, Col, Visible } from "components/Grid";
import colors from "styles/colors";
import Step from "components/Step";
import { StyledContainer } from "styles/components";
import Circles from "components/Circles";

const Decription: FC = () => {
  return (
    <div>
      <Circles
        color={colors.purpleLiner}
        top="200px"
        size={30}
        maxWidth="400px"
        zIndex="0"
      />
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={4} lg={3}>
            <Visible md lg>
              <Box boxShadow="0 0 50px 0 rgba(0,0,0,0.50);" borderRadius="60px">
                <img
                  src="/images/iphone.png"
                  height="673"
                  width="336"
                  alt="iphone"
                />
              </Box>
            </Visible>
          </Col>

          <Col offset={{ md: 1, sm: 3 }} xs={12} sm={6} md={7} lg={6}>
            <Step
              margin="0 0 120px 0"
              imageUrl="/images/swipe.png"
              step="1. Explore talent"
              description="Choose from our diverse range of high-profile talent from a variety of industries for your unique digital event."
            />
            <Step
              margin="0 0 120px 0"
              imageUrl="/images/contract.png"
              step="2. Book Your Talent"
              description="Make your selection based on your business' preferences for the event."
            />
            <Step
              margin="0 0 120px 0"
              imageUrl="/images/profile.png"
              step="3. Create Your Event"
              description="Elevate your in-person or digital event experience with an incredible line-up of world-renowned names."
            />
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
};

export default Decription;
