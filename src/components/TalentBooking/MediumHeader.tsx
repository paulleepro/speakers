import React, { FC } from "react";
import { VirtualText, BigText, StyledImage } from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import AvailableFor from "components/shared/AvailableFor";
import { ITalent } from "types";
import Form from "./Form";
import { Box } from "react-basic-blocks";
import { config } from "config";

interface IProps {
  talent: ITalent;
}

const MediumHeader: FC<IProps> = ({ talent }) => {
  const {
    name,
    media: { images },
    slug,
    id,
  } = talent;

  return (
    <>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={3} md={4}>
            <StyledImage
              borderRadius="20px"
              src={`${config.imageProxyUrl}${images[0]?.url}`}
              height={417}
            />
            <Box margin="30px 0 0 0">
              <AvailableFor />
            </Box>
          </Col>
          <Col offset={{ md: 1 }} lg={6} md={7}>
            <VirtualText>Booking Enquiry</VirtualText>
            <BigText margin="30px 0">{name}</BigText>
            <Form slug={slug} id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MediumHeader;
