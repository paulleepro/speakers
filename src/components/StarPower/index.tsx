import React, { FC } from "react";
import { Row, Col, Container } from "react-grid-system";
import { Box } from "react-basic-blocks";
import { DescriptionText, HeaderText, Button } from "styles/components";
import colors from "styles/colors";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 120px;
  border-radius: 0 300px 0 0;
  border-top: solid 1px ${colors.purpleLiner};
  background-image: linear-gradient(
    to bottom,
    #000000 30%,
    rgba(34, 30, 41, 0.5)
  );
`;

const StarPower: FC = () => {
  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <Col offset={{ sm: 2 }} sm={8} xs={12}>
            <Box margin="120px 0 120px 0" alignItems="center">
              <HeaderText>Bring Star Power to Your Next Event</HeaderText>
              <DescriptionText color={colors.midGrey} textAlign="center">
                We bring talent directly to you. Our high-profile speakers are
                available for your next corporate event.
              </DescriptionText>
              <Button margin="40px 0 0 0">Get In Touch</Button>
            </Box>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default StarPower;
