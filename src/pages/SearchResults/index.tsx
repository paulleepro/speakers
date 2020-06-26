import React, { FC } from "react";
import { useLocation } from "react-router";
import { Row, Col, Visible } from "react-grid-system";
import { ISearch } from "types";
import { config } from "config";
import SpeakerCard from "components/SpeakerCard";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import { BigText, ArrowLeftText, StyledContainer } from "styles/components";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import StarPower from "components/StarPower";
import TopLeftGradient from "components/TopLeftGradient";

const SearchResults: FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const { data, error, isLoading } = fetchSingle<ISearch>(
    `${config.speakersTalentUrl}/v1/talents/search/multi-match?query=${query}&limit=20`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  return (
    <>
      <div>
        <StyledContainer fluid>
          <Row>
            <Col offset={{ lg: 1 }} xs={12} lg={10}>
              <Box padding="40px 0 80px">
                <Link to="/explore">
                  <ArrowLeftText>BACK TO EXPLORE</ArrowLeftText>
                </Link>
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
