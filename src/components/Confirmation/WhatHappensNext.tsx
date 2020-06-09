import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { DescriptionText, HeaderText, Button } from "styles/components";
import Step from "components/shared/Step";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";

interface IProps {
  name: string;
}

const WhatHappensNext: FC<IProps> = ({ name }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={5} md={6}>
            <HeaderText>What happens next</HeaderText>
            <Step
              margin="40px 0 0 0"
              imageUrl="/images/profile.png"
              step="1. Check your Email"
              description="We sent you a confirmation of your booking to insertemail@email.com"
            />
            <Step
              margin="40px 0 0 0"
              imageUrl="/images/profile.png"
              step="2. Availability "
              description={`We will coordinate with ${name} to schedule the event.`}
            />
            <Step
              margin="40px 0 0 0"
              imageUrl="/images/profile.png"
              step="3. Confirmation"
              description="Choose from our selection of high-profile talent from a variety of industries for your specific digital event."
            />
            <Step
              margin="40px 0 0 0"
              imageUrl="/images/profile.png"
              step="4. Event details"
              description="Choose from our selection of high-profile talent from a variety of industries for your specific digital event."
            />
          </Col>
          <Col offset={{ lg: 1 }} xs={12} md={5} lg={4}>
            <Box
              borderRadius="12px"
              backgroundColor={colors.purpleBgFill}
              padding="40px"
            >
              <DescriptionText weight="bold" color={colors.white}>
                Your Booking Request
              </DescriptionText>
              <DescriptionText color={colors.midGrey}>
                Talent Requested
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                {name}
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Booked by
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                John Doe
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Event Type
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                Video Message
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Event Date
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                06/03/2020
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Event Location
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                New York City, NY
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Preferred Budget
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                $1500 - $3,000
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Event Theme
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                Diversity
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Additional Notes
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                Microsoft is holding their annual Town Hall meeting and we would
                love for Alexis to lorem ipsum…
              </DescriptionText>
              <br />
              <br />
              <Button>Modify Request</Button>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatHappensNext;
