import React, { FC } from "react";
import { Row, Col, Visible } from "components/Grid";
import {
  HeaderText,
  DescriptionText,
  BigText,
  Button,
  StyledContainer,
} from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import StyledImage from "components/StyledImage";

const OurEvents: FC = () => {
  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1, md: 0, sm: 1 }} xs={12} sm={10} md={9} lg={6}>
            <Box margin="80px 0">
              <BigText>Our Events</BigText>
              <DescriptionText>
                In this increasingly digital and adaptive environment, we
                provide access to book top-tier talent for both in-person and
                digital engagements.
              </DescriptionText>
            </Box>
          </Col>
        </Row>
        <Row align="center">
          <Col offset={{ lg: 1, md: 0, sm: 1 }} lg={4} md={5} sm={10} xs={12}>
            <Box justifyContent="center">
              <HeaderText>Best Practices Whitepaper</HeaderText>
              <Visible md lg>
                <DescriptionText color={colors.midGrey}>
                  Learn how businesses adapted their in-person events to an
                  online experience amidst COVID-19. Find out the best practices
                  on how you can create a seamless virtual event for your
                  industry.
                </DescriptionText>
                <div>
                  <Button margin="30px 0 0 0">Watch the Case Study</Button>
                </div>
              </Visible>
            </Box>
          </Col>
          <Col
            offset={{ sm: 3, xs: 0, md: 1, lg: 0 }}
            lg={6}
            md={6}
            sm={6}
            xs={12}
          >
            <Box
              backgroundColor={colors.midDarkGrey}
              padding="12px"
              borderRadius="23px"
              alignItems="center"
              justifyContent="center"
              border="1px solid #2a2a2a"
            >
              <StyledImage src="/images/kevin-hart.png" borderRadius="12px" />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col offset={{ sm: 1 }} sm={10} xs={12}>
            <Visible xs sm>
              <Box alignItems="center" margin="20px 0">
                <DescriptionText color={colors.midGrey}>
                  Learn how Kevin Hart inspired a hardworking team of students
                  and teachers at lorem ipsum university.
                </DescriptionText>
                <div>
                  <Button margin="30px 0 0 0">Watch the Case Study</Button>
                </div>
              </Box>
            </Visible>
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
};

export default OurEvents;
