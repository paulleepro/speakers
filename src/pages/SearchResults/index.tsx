import React, { FC, lazy } from "react";
import { useLocation } from "react-router";
import { Row, Col, Visible } from "components/Grid";
import { ISearch } from "types";
import { config } from "config";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import { BigText, StyledContainer } from "styles/components";
import { Box } from "react-basic-blocks";

const ErrorNotice = lazy(() => import("components/ErrorNotice"));
const HeaderTags = lazy(() => import("components/HeaderTags"));
const SpeakerCard = lazy(() => import("components/SpeakerCard"));
const StarPower = lazy(() => import("components/StarPower"));
const TopLeftGradient = lazy(() => import("components/TopLeftGradient"));

const SearchResults: FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const queryVal = query.get("query");
  const { data, error, isLoading } = fetchSingle<ISearch>(
    `${config.speakersTalentUrl}/v1/talents/search/multi-match?query=${queryVal}&limit=20`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  return (
    <>
      <HeaderTags
        title="Search"
        description="Search through our many high-profile speakers for your next corporate town hall, board meeting, or retreat."
      />
      <div>
        <StyledContainer fluid>
          <Row>
            <Col offset={{ lg: 1 }} xs={12} lg={10}>
              <Box padding="40px 0 80px">
                <BigText>Search Results</BigText>
              </Box>
            </Col>
          </Row>
        </StyledContainer>
        <Visible md lg>
          <TopLeftGradient height="800px" width="60%" borderRadius="600px" />
        </Visible>
        <StyledContainer fluid>
          <Row>
            <Col offset={{ lg: 1 }} lg={10}>
              <Row>
                {data.results.map((x, i) => {
                  const images = x.media?.raw
                    ? JSON.parse(x.media?.raw)?.images
                    : null;
                  return (
                    <Col key={`search-result-${i}`} xs={6} md={3}>
                      <SpeakerCard
                        id={x.id?.raw}
                        slug={x.slug?.raw}
                        imageUrl={`${config.imageProxyUrl}${
                          images && Array.isArray(images) && images[0].url
                        }`}
                        name={x.name?.raw}
                        description={x.titles?.raw && x.titles?.raw[0]}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </StyledContainer>
      </div>
      <StarPower />
    </>
  );
};

export default SearchResults;
