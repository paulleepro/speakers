import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import { BigText, StyledContainer } from "styles/components";
import { HeaderDivider } from "./styles";

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
      <HeaderDivider />
    </div>
  );
};

export default Title;
