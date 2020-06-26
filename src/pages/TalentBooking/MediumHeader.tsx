import React, { FC } from "react";
import {
  VirtualText,
  BigText,
  ArrowLeftText,
  StyledContainer,
} from "styles/components";
import { Row, Col } from "react-grid-system";
import AvailableFor from "components/AvailableFor";
import { ITalent } from "types";
import Form from "./Form";
import { Box } from "react-basic-blocks";
import { config } from "config";
import StyledImage from "components/StyledImage";
import { Link } from "react-router-dom";
import Circles from "components/Circles";
import TopLeftGradient from "components/TopLeftGradient";
import colors from "styles/colors";

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
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <Box padding="30px 0 70px">
              <Link to={`/talent/${slug}`}>
                <ArrowLeftText>BACK TO {name.toUpperCase()}</ArrowLeftText>
              </Link>
            </Box>
          </Col>
        </Row>
      </StyledContainer>
      <Circles
        color={colors.purpleLiner}
        top="50px"
        size={25}
        maxWidth="400px"
        zIndex="0"
      />
      <TopLeftGradient height="1100px" width="50%" borderRadius="600px" />
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={3} md={4}>
            <StyledImage
              alt="talent-img"
              fallbackSrc="/images/default-profile.svg"
              borderRadius="20px"
              src={`${config.imageProxyUrl}${images[0]?.url}`}
              height={417}
            />
            <Box margin="30px 0 0 0">
              <AvailableFor />
            </Box>
          </Col>
          <Col offset={{ md: 1 }} lg={6} md={7}>
            <VirtualText margin="0px">Booking Enquiry</VirtualText>
            <BigText margin="30px 0 6px 0">{name}</BigText>
            <Form slug={slug} id={id} />
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default MediumHeader;
