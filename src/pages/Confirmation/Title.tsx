import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { BigText, DescriptionText } from "styles/components";

interface IProps {
  name: string;
}

const Title: FC<IProps> = ({ name }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={9} lg={6}>
            <BigText>Congrats!</BigText>
            <DescriptionText margin="0 0 120px 0">
              Your request to book {name} has been submitted. You should receive
              a confirmation email shortly.
            </DescriptionText>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Title;
