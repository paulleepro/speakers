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
import { ISearchResult } from "types";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import useDebounce from "hooks/useDebounce";

interface IProps {
  onClickAway?: () => void;
  close?: () => void;
}

const SearchAutocomplete: FC<IProps> = ({ onClickAway, close }) => {
  const { push } = useHistory();
  const [value, setValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce(value, 300);
  const [results, setResults] = useState<ISearchResult[]>([]);

  const goTo = (url: string) => {
    push(url);
    if (onClickAway) {
      onClickAway();
    }
    if (close) {
      close();
    }
    setResults([]);
    setValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      window.analytics.track("search", {
        query: debouncedSearchTerm,
        autocomplete: false,
      });
      goTo(`/search-results?query=${value}`);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      window.analytics.track("search", {
        query: debouncedSearchTerm,
        autocomplete: true,
      });
      fetch(
        `${config.speakersTalentUrl}/v1/talents/search/multi-match?query=${debouncedSearchTerm}&limit=20`
      ).then(async (res) => {
        const json = await res.json();
        setResults((json?.results as unknown) as ISearchResult[]);
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
            autoFocus
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
              <div key={x.id.raw} onClick={() => goTo(`/talent/${x.slug.raw}`)}>
                {x.name.raw}
              </div>
            ))}
          </AutocompleteResults>
        ) : null}
      </AutocompleteWrapper>
    </StyledClickAwayListener>
  );
};

export default SearchAutocomplete;
