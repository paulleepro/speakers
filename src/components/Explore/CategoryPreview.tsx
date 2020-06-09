import React, { FC } from "react";
import { HeaderText, DescriptionText } from "styles/components";
import { Container, Row, Col, Visible } from "react-grid-system";
import { Box } from "react-basic-blocks";
import { fetchSingle } from "fetch-hooks-react";
import { IListResult, ITalent } from "types";
import Loader from "components/Loader";
import { config } from "config";
import ErrorNotice from "components/ErrorNotice";
import SpeakerCard from "components/SpeakerCard";
import SwipeableCards from "components/shared/SwipeableCards";

interface IProps {
  categoryName: string;
}

const CategoryPreview: FC<IProps> = ({ categoryName }) => {
  const { data, error, isLoading } = fetchSingle<IListResult<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents?limit=4&where=types.name:like:${categoryName}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

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
              <Col offset={{ lg: i === 0 ? 1 : 0 }} xs={3} lg={2.5}>
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
