import React, { FC, useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useHistory } from "react-router";
import {
  Input,
  SearchWrapper,
  AutocompleteWrapper,
  AutocompleteResults,
} from "./styles";
import { config } from "config";
import { ITalent, ISearchResult } from "types";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

interface IProps {
  setSearchResults: (results: ISearchResult<ITalent>[]) => void;
}

const Search: FC<IProps> = ({ setSearchResults }) => {
  const { push } = useHistory();
  const [value, setValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce(value, 300);
  const [results, setResults] = useState<ISearchResult<ITalent>[]>([]);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchResults(results);
      setValue("");
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(
        `${config.speakersTalentUrl}/v1/talents/search/multi-match?query=${debouncedSearchTerm}&limit=20`
      ).then(async (res) => {
        const json = await res.json();
        setResults((json as unknown) as ISearchResult<ITalent>[]);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <SearchWrapper>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <AutocompleteWrapper>
              <Input
                placeholder="Try “Kendrick Lamar” or “Diversity”"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                squareBottom={Boolean(results.length)}
                onKeyDown={handleKeyDown}
              />
              {results.length ? (
                <AutocompleteResults>
                  {results.slice(0, 7).map((x) => (
                    <div
                      key={x._id}
                      onClick={() => push(`/talent/${x._source.slug}`)}
                    >
                      {x._source.name}
                    </div>
                  ))}
                </AutocompleteResults>
              ) : null}
            </AutocompleteWrapper>
          </Col>
        </Row>
      </Container>
    </SearchWrapper>
  );
};

export default Search;
