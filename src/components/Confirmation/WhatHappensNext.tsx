import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useLocation } from "react-router";
import { DescriptionText, HeaderText, Button } from "styles/components";
import Step from "components/shared/Step";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";
import qs from "qs";

interface IProps {
  name: string;
}

interface IQuery {
  user_id: string;
  options: {
    event_type: string;
    event_date: string;
    event_country: string;
    event_state: string;
    event_city: string;
    budget_currency: string;
    budget_min_cents: number;
    budget_max_cents: number;
    event_theme: string;
    notes: string;
  };
}

const WhatHappensNext: FC<IProps> = ({ name }) => {
  const query = (qs.parse(useLocation().search.slice(1)) as unknown) as IQuery;
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
              <br />
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
                {query.user_id}
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Event Type
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                {query?.options?.event_type === "in_person"
                  ? "In Person"
                  : "Digital"}
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Event Date
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                {new Date(query?.options?.event_date).toLocaleDateString()}
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Preferred Budget
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                {query?.options?.budget_currency}{" "}
                {query?.options?.budget_min_cents / 100}
                {" - "}
                {query?.options?.budget_max_cents / 100}
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Event Theme
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                {query?.options?.event_theme}
              </DescriptionText>
              <br />
              <DescriptionText color={colors.midGrey}>
                Additional Notes
              </DescriptionText>
              <DescriptionText weight="bold" color={colors.white}>
                {query?.options?.notes || "N/A"}
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
