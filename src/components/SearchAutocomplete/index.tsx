import React, { FC, useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
import {
  Input,
  AutocompleteWrapper,
  AutocompleteResults,
  StyledClickAwayListener,
} from "./styles";
import { config } from "config";
import { ITalent, ISearchResult } from "types";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

interface IProps {
  onClickAway?: () => void;
}

const SearchAutocomplete: FC<IProps> = ({ onClickAway }) => {
  const { push } = useHistory();
  const [value, setValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce(value, 300);
  const [results, setResults] = useState<ISearchResult<ITalent>[]>([]);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      push(`/search-results?query=${value}`);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(
        `${config.speakersTalentUrl}/v1/talents/search/multi-match?query=${debouncedSearchTerm}&limit=20`
      ).then(async (res) => {
        const json = await res.json();
        setResults((json?.hits as unknown) as ISearchResult<ITalent>[]);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const clickAway = () => {
    if (onClickAway) {
      onClickAway();
    }
    setResults([]);
    setValue("");
  };

  return (
    <StyledClickAwayListener onClickAway={clickAway}>
      <AutocompleteWrapper>
        <Box flexDirection="row" alignItems="center">
          <Input
            placeholder="Try “Kendrick Lamar” or “Diversity”"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            squareBottom={Boolean(results.length)}
            onKeyDown={handleKeyDown}
          />
          <Box margin="0 -40px">
            <SearchIcon style={{ color: colors.lightGrey }} />
          </Box>
        </Box>
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
    </StyledClickAwayListener>
  );
};

export default SearchAutocomplete;
