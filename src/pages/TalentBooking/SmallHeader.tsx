import React, { FC } from "react";
import { VirtualText, BigText, ArrowLeftText } from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import { ITalent } from "types";
import Form from "./Form";
import { config } from "config";
import StyledImage from "components/StyledImage";
import { Link } from "react-router-dom";

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
            <Link to={`/talent/${slug}`}>
              <ArrowLeftText margin="40px 0 0 0">BACK</ArrowLeftText>
            </Link>
            <BigText margin="24px 0">{name}</BigText>
            <VirtualText margin="0 0 24px">Booking Inquiry</VirtualText>
          </Col>
        </Row>
        <Row>
          <Col offset={{ sm: 3, xs: 0 }} sm={6} xs={12}>
            <StyledImage
              alt="talent-img"
              fallbackSrc="/images/default-profile.svg"
              borderRadius="20px"
              src={`${config.imageProxyUrl}${images[0]?.url}`}
              height={417}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form slug={slug} id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SmallHeader;
