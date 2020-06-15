import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import StarPower from "components/StarPower";
import { BigText, DescriptionText } from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";

const AboutUs: FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <BigText margin="80px 0 100px 0">About Us</BigText>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <DescriptionText
              weight="bold"
              margin="80px 0 0 0"
              color={colors.midGrey}
            >
              About Us
            </DescriptionText>
            <Box
              borderBottom={`1px solid ${colors.purpleBgFill}`}
              margin="15px 0 32px 0"
            />
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              gravida scelerisque sagittis. Pellentesque egestas vulputate
              rutrum. Maecenas vel mattis nisl. Vestibulum a commodo nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              gravida scelerisque sagittis. Pellentesque egestas vulputate
              rutrum. Maecenas vel mattis nisl. Vestibulum a commodo nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              gravida scelerisque sagittis. Pellentesque egestas vulputate
              rutrum. Maecenas vel mattis nisl. Vestibulum a commodo nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              gravida scelerisque sagittis. Pellentesque egestas vulputate
              rutrum. Maecenas vel mattis nisl. Vestibulum a commodo nulla.
            </DescriptionText>
          </Col>
        </Row>
      </Container>
      <StarPower />
    </div>
  );
};

export default AboutUs;
