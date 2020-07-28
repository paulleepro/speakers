import React, { FC } from "react";
import { Row, Col, Visible } from "components/Grid";
import { ITalent } from "types";
import SwipeableCards from "components/SwipeableCards";
import FeaturedCards from "components/Featured/FeaturedCards";

interface IProps {
  data: ITalent[];
  mdCardsPerRow?: number;
}

const Featured: FC<IProps> = ({ data, mdCardsPerRow }) => {
  return (
    <Row>
      <Col offset={{ lg: 1 }} xs={12} lg={10}>
        <Visible lg md>
          <FeaturedCards talentList={data} cardsPerRow={mdCardsPerRow} />
        </Visible>
        <Visible xs sm>
          <SwipeableCards talentList={data} />
        </Visible>
      </Col>
    </Row>
  );
};

export default Featured;
