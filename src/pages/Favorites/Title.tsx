import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import { BigText, TopAreaDivider, StyledContainer } from "styles/components";

const Title: FC = () => {
  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={9} lg={6}>
            <BigText>Favorites List</BigText>
          </Col>
        </Row>
      </StyledContainer>
      <TopAreaDivider />
    </div>
  );
};

export default Title;
