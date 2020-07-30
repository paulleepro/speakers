import React, { FC } from "react";
import { Row, Col } from "components/Grid";
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
              <HeaderText>Book Premium Talent for Your Next Event</HeaderText>
              <DescriptionText color={colors.midGrey} textAlign="center">
                Reach out to us about who you would like to book for your
                upcoming in-person or digital experience!
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
