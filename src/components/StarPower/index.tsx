import React, { FC } from "react";
import { Row, Col } from "react-grid-system";
import { Box } from "react-basic-blocks";
import {
  DescriptionText,
  HeaderText,
  Button,
  StyledContainer,
} from "styles/components";
import colors from "styles/colors";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 120px;
  border-radius: 0 250px 0 0;
  border-top: solid 1px ${colors.purpleLiner};
  background-image: linear-gradient(to bottom, #000000 30%, rgba(26, 23, 31));
  z-index: 9;

  @media (max-width: 1024px) {
    border-radius: 0 150px 0 0;
  }
`;

const StarPower: FC = () => {
  return (
    <Wrapper>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ sm: 2 }} sm={8} xs={12}>
            <Box margin="120px 0 120px 0" alignItems="center">
              <HeaderText>Bring Star Power to Your Next Event</HeaderText>
              <DescriptionText color={colors.midGrey} textAlign="center">
                We bring talent directly to you. Our high-profile speakers are
                available for your next corporate event.
              </DescriptionText>
              <a href="mailto:contact@wmespeakersbeta.com">
                <Button margin="40px 0 0 0">Get In Touch</Button>
              </a>
            </Box>
          </Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

export default StarPower;
