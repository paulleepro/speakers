import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import {
  BigText,
  DescriptionText,
  TopAreaDivider,
  StyledContainer,
} from "styles/components";
import { Link } from "react-router-dom";

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
            <BigText>Submitted</BigText>
            <DescriptionText>
              Your request to book <Link to={`/talent/${slug}`}>{name}</Link>{" "}
              has been submitted.
            </DescriptionText>
            <DescriptionText margin="0 0 80px 0">
              You’ll receive a confirmation email shortly and our agents will
              followup with you within 2-3 days.
            </DescriptionText>
          </Col>
        </Row>
      </StyledContainer>
      <TopAreaDivider />
    </div>
  );
};

export default Title;
