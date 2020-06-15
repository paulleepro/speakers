import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { Container, Row, Col, Visible } from "react-grid-system";
import colors from "styles/colors";
import Step from "components/Step";

const Decription: FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Visible md lg>
            <Col offset={{ lg: 1 }} xs={12} md={4} lg={3}>
              <Box
                backgroundColor={colors.midDarkGrey}
                height="661px"
                width="321px"
                borderRadius="40px"
                alignItems="center"
                justifyContent="center"
                border="1px solid #2a2a2a"
                flex="0 0 auto"
              >
                <img
                  src="/images/iphone.png"
                  height="631"
                  width="291"
                  alt="swipe"
                />
              </Box>
            </Col>
          </Visible>

          <Col offset={{ md: 1 }} xs={12} md={7} lg={6}>
            <Step
              imageUrl="/images/swipe.png"
              step="1. Explore talent"
              description="Choose from our selection of high-profile talent from a variety of industries for your specific digital event."
            />
            <Step
              imageUrl="/images/contract.png"
              step="2. Book Your Talent"
              description="Simply make your selection based on your business' needs."
            />
            <Step
              imageUrl="/images/profile.png"
              step="3. Create Your Event"
              description="Choose from our selection of high-profile talent from a variety of industries for your specific digital event."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Decription;
