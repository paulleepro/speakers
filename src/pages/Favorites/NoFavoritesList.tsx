import React, { FC, lazy } from "react";

import { Row, Col } from "components/Grid";
import { HeaderText, Button, StyledContainer } from "styles/components";
import { ExploreCard, ExploreDescription } from "./styles";
const Step = lazy(() => import("./Step"));

const NoFavoritesList: FC = () => {
  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <HeaderText>My Favorites List</HeaderText>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <ExploreCard>
              <Row>
                <Col sm={12} md={4}>
                  <Step imageUrl="/images/star.png" step="Browse & Select" />
                </Col>
                <Col sm={12} md={4}>
                  <Step imageUrl="/images/edit.png" step="Name Your List" />
                </Col>
                <Col sm={12} md={4}>
                  <Step
                    imageUrl="/images/sharehands.png"
                    step="Share With Us"
                  />
                </Col>
              </Row>
              <ExploreDescription>
                Sharing your Favorites List will provide our agents with a
                stronger sense of what you're looking for in your request. This
                list can be shared with your committee to ensure all their
                requirements are met, as well.
              </ExploreDescription>
              <Button>Explore Now</Button>
            </ExploreCard>
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
};

export default NoFavoritesList;
