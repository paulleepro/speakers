import React, { FC, lazy } from "react";
import { useHistory } from "react-router";
import { Row, Col } from "components/Grid";
import { useScreenClass } from "components/Grid";
import { HeaderText, Button, StyledContainer } from "styles/components";
import {
  ExploreCard,
  ExploreDescription,
  StepsRow,
  DashedLine,
} from "./styles";
const Step = lazy(() => import("./Step"));

const NoFavoritesList: FC = () => {
  const history = useHistory();
  const screenSize = useScreenClass();
  const isNarrowScreen = ["xs", "sm"].includes(screenSize);

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
              <StepsRow>
                <Col md={12} lg={4}>
                  <Step imageUrl="/images/star.png" step="Browse & Select" />
                </Col>
                <DashedLine
                  src={`/images/dashed-line-${
                    isNarrowScreen ? "mobile" : "desktop"
                  }.png`}
                  height={isNarrowScreen ? "36" : "4"}
                  width={isNarrowScreen ? "5" : "190"}
                  alt="line"
                />
                <Col md={12} lg={4}>
                  <Step imageUrl="/images/edit.png" step="Name Your List" />
                </Col>
                <DashedLine
                  src={`/images/dashed-line-${
                    isNarrowScreen ? "mobile" : "desktop"
                  }.png`}
                  height={isNarrowScreen ? "36" : "4"}
                  width={isNarrowScreen ? "5" : "190"}
                  alt="line"
                />
                <Col md={12} lg={4}>
                  <Step
                    imageUrl="/images/sharehands.png"
                    step="Share With Us"
                  />
                </Col>
              </StepsRow>
              <ExploreDescription>
                Sharing your Favorites List will provide our agents with a
                stronger sense of what you're looking for in your request. This
                list can be shared with your committee to ensure all their
                requirements are met, as well.
              </ExploreDescription>
              <Button onClick={() => history.replace("/explore")}>
                Explore Now
              </Button>
            </ExploreCard>
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
};

export default NoFavoritesList;
