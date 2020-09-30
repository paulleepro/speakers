import React, { FC, lazy } from "react";
import { Row, Col, Visible } from "components/Grid";
import { ITalent } from "types";
import LazyWrapper from "components/LazyWrapper";

const SwipeableCards = lazy(() => import("components/SwipeableCards"));
const FeaturedCards = lazy(() => import("components/Featured/FeaturedCards"));

interface IProps {
  data: ITalent[];
  mdCardsPerRow?: number;
}

const Featured: FC<IProps> = ({ data, mdCardsPerRow }) => {
  return (
    <Row>
      <Col offset={{ lg: 1 }} xs={12} lg={10}>
        <LazyWrapper>
          <Visible lg md>
            <FeaturedCards talentList={data} cardsPerRow={mdCardsPerRow} />
          </Visible>
          <Visible xs sm>
            <SwipeableCards talentList={data} />
          </Visible>
        </LazyWrapper>
      </Col>
    </Row>
  );
};

export default Featured;
