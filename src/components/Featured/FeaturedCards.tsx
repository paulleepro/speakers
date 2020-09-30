import React, { FC, lazy } from "react";
import { Row, Col } from "components/Grid";
import { config } from "config";
import { ITalent } from "types";

const SpeakerCard = lazy(() => import("components/SpeakerCard"));

interface IProps {
  talentList: ITalent[];
  cardsPerRow?: number;
}

const FeaturedCards: FC<IProps> = ({ talentList, cardsPerRow = 3 }) => {
  return (
    <Row>
      {talentList.slice(0, 8).map((x) => (
        <Col md={12 / cardsPerRow} key={`featured-talent-${x.id}`}>
          <SpeakerCard
            name={x.name}
            imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
            slug={x.slug}
            description={x.titles[0]}
          />
        </Col>
      ))}
    </Row>
  );
};

export default FeaturedCards;
