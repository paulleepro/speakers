import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { config } from "config";
import { ITalent } from "types";
import SpeakerCard from "components/SpeakerCard";

interface IProps {
  talentList: ITalent[];
}

const FeaturedCards: FC<IProps> = ({ talentList }) => {
  return (
    <Container fluid>
      <Row>
        {talentList.map((x, i) => (
          <Col md={4} sm={3} xs={6} key={`featured-talent-${i}`}>
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
