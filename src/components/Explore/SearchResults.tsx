import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { ITalent, ISearchResult } from "types";
import { config } from "config";
import SpeakerCard from "components/SpeakerCard";

interface IProps {
  setSearchResults: (results: ISearchResult<ITalent>[]) => void;
  searchResults: ISearchResult<ITalent>[];
}

const SearchResults: FC<IProps> = ({ searchResults, setSearchResults }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <Row>
              {searchResults.map((x, i) => (
                <Col key={`search-result-${i}`} xs={6} md={3}>
                  <SpeakerCard
                    slug={x._source.slug}
                    imageUrl={`${config.imageProxyUrl}${x._source.media.images[0]?.url}`}
                    name={x._source.name}
                    description={x._source.titles[0]}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchResults;
