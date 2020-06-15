import React, { FC } from "react";
import { VirtualText, BigText } from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import { ITalent } from "types";
import Form from "./Form";
import { config } from "config";
import StyledImage from "components/StyledImage";

interface IProps {
  talent: ITalent;
}

const SmallHeader: FC<IProps> = ({ talent }) => {
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
          <Col offset={{ sm: 1 }} xs={12} sm={10}>
            <BigText margin="24px 0">{name}</BigText>
            <VirtualText margin="0 0 24px">Booking Inquiry</VirtualText>
            <StyledImage
              alt="talent-img"
              fallbackSrc="/images/default-profile.svg"
              borderRadius="20px"
              src={`${config.imageProxyUrl}${images[0]?.url}`}
              height={417}
            />
            <Form slug={slug} id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SmallHeader;
