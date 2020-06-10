import React, { FC } from "react";
import { HeaderText, DescriptionText } from "styles/components";
import { Container, Row, Col, Visible } from "react-grid-system";
import { Box } from "react-basic-blocks";
import SpeakerCard from "components/SpeakerCard";
import SwipeableCards from "components/shared/SwipeableCards";
import { ITalent, IListResult } from "types";
import { config } from "config";

interface IProps {
  categoryName: string;
  data: IListResult<ITalent>;
}

const CategoryPreview: FC<IProps> = ({ categoryName, data }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
              margin="120px 0 0 0"
            >
              <HeaderText>{categoryName}</HeaderText>
              <DescriptionText>See All</DescriptionText>
            </Box>
          </Col>
        </Row>
        <Row>
          <Visible md lg sm>
            {data.data.map((x, i) => (
              <Col
                offset={{ lg: i === 0 ? 1 : 0 }}
                xs={3}
                lg={2.5}
                key={`speaker-${categoryName.replace(/ /g, "-")}-${i}`}
              >
                <SpeakerCard
                  slug={x.slug}
                  imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
                  name={x.name}
                  description={x.titles[0]}
                />
              </Col>
            ))}
          </Visible>
          <Visible xs>
            <SwipeableCards talentList={data.data} />
          </Visible>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryPreview;
