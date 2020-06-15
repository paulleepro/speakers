import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { config } from "config";
import { ITalent } from "types";
import SpeakerCard from "components/SpeakerCard";

interface IProps {
  talentList: ITalent[];
  cardsPerRow?: number;
}

const FeaturedCards: FC<IProps> = ({ talentList, cardsPerRow = 3 }) => {
  return (
    <Container fluid>
      <Row>
        {talentList.map((x) => (
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
    </Container>
  );
};

export default FeaturedCards;
