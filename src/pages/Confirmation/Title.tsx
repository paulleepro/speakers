import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import {
  BigText,
  DescriptionText,
  TopAreaDivider,
  ArrowLeftText,
  StyledContainer,
} from "styles/components";
import { Link } from "react-router-dom";
import { Box } from "react-basic-blocks";

interface IProps {
  name: string;
  slug: string;
}

const Title: FC<IProps> = ({ name, slug }) => {
  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1, md: 0, sm: 1 }} xs={12} sm={10} md={12} lg={10}>
            <Box padding="30px 0 0 0">
              <Link to={`/talent/${slug}/booking`}>
                <ArrowLeftText>GO BACK</ArrowLeftText>
              </Link>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1, md: 0, sm: 1 }} xs={12} sm={10} md={12} lg={10}>
            <BigText>Congrats!</BigText>
            <DescriptionText margin="0 0 80px 0">
              Your request to book <Link to={`/talent/${slug}`}>{name}</Link>{" "}
              has been submitted. You should receive a confirmation email
              shortly.
            </DescriptionText>
          </Col>
        </Row>
      </StyledContainer>
      <TopAreaDivider />
    </div>
  );
};

export default Title;
