import React, { FC } from "react";
import { Link } from "react-router-dom";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import { Row, Col } from "components/Grid";
import { HeaderText, Button, StyledContainer } from "styles/components";
import { Box } from "react-basic-blocks";
import { config } from "config";
import { IListResult, ITalent } from "types";
import SpeakerCard from "components/SpeakerCard";

interface IProps {
  name: string;
  types: string[];
}

const MoreLike: FC<IProps> = ({ name, types }) => {
  const typesQuery = types
    .map((x) => `&whereSome=types.name:exact:${x}`)
    .join("");

  const { data, error, isLoading } = fetchSingle<IListResult<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents?limit=4&fields=id,name,slug,media,types,titles${typesQuery}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return null;
  }
  return (
    <StyledContainer fluid>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <Box margin="80px 0 0 0">
            <HeaderText>More talent like {name}</HeaderText>
          </Box>
        </Col>
      </Row>
      <Row>
        {data.data.map((x, i) => (
          <Col
            key={`more-like-${i}`}
            offset={{ lg: i === 0 ? 1 : 0 }}
            xs={6}
            md={3}
            lg={25}
          >
            <SpeakerCard
              slug={x.slug}
              name={x.name}
              imageUrl={x.media.images[0]?.url}
              description={x.titles[0]}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Box alignItems="center">
            <Link to="/explore">
              <Button margin="40px 0">Explore All</Button>
            </Link>
          </Box>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default MoreLike;
