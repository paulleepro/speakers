import React, { FC, lazy } from "react";
import { VirtualText, BigText, ArrowLeftText } from "styles/components";
import { Container, Row, Col, useScreenClass } from "components/Grid";
import { ITalent } from "types";
import { config } from "config";
import { Link } from "react-router-dom";
import { SmallImageWrapper } from "./styles";
import colors from "styles/colors";
import LazyWrapper from "components/LazyWrapper";

const Form = lazy(() => import("./Form"));
const StyledImage = lazy(() => import("components/StyledImage"));
const Circles = lazy(() => import("components/Circles"));
const TopLeftGradient = lazy(() => import("components/TopLeftGradient"));

interface IProps {
  talent: ITalent;
}

const SmallHeader: FC<IProps> = ({ talent }) => {
  const screenSize = useScreenClass();
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
      </Container>
      <LazyWrapper>
        <Circles
          color={colors.purpleLiner}
          top="50px"
          size={50}
          maxWidth="400px"
          zIndex="0"
        />
        <TopLeftGradient
          height={screenSize === "xs" ? "1450px" : "1250px"}
          width="100%"
          borderRadius="600px"
        />
      </LazyWrapper>
      <Container fluid>
        <Row>
          <Col>
            <SmallImageWrapper>
              <LazyWrapper>
                <StyledImage
                  alt="talent-img"
                  fallbackSrc="/images/default-profile.svg"
                  borderRadius="20px"
                  src={`${config.imageProxyUrl}${images[0]?.url}`}
                  height={417}
                />
              </LazyWrapper>
            </SmallImageWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <LazyWrapper>
              <Form slug={slug} id={id} />
            </LazyWrapper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SmallHeader;
