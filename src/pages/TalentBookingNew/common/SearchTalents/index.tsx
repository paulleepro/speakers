import React, { FC, useState, useEffect } from "react";
import {
  AutocompleteResults,
  StyledClickAwayListener,
} from "components/SearchAutocomplete/styles";
import { config } from "config";
import { ISearchResult } from "types";
import colors from "styles/colors";
import useDebounce from "hooks/useDebounce";
import { Input, InputWrapper, IconWrapper } from "../InputText/styles";
import SearchIcon from "assets/icons/Search";
import { AutocompleteWrapper } from "./styles";

interface IProps {
  onClickAway?: () => void;
  close?: () => void;
  onSelectTalent: (value: any) => void;
}

const SearchAutocomplete: FC<IProps> = ({
  onClickAway,
  close,
  onSelectTalent,
}) => {
  const [value, setValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce(value, 300);
  const [results, setResults] = useState<ISearchResult[]>([]);

  const handleSelect = (talent: any): void => {
    onSelectTalent(talent);
    if (onClickAway) {
      onClickAway();
    }
    if (close) {
      close();
    }
    setResults([]);
    setValue("");
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
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
        <InputWrapper>
          <Input
            autoFocus
            placeholder="Search by name…"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            squareBottom={Boolean(results.length)}
          />
          <IconWrapper>
            <SearchIcon fill={colors.midGrey} />
          </IconWrapper>
        </InputWrapper>
        {results.length ? (
          <AutocompleteResults>
            {results.slice(0, 7).map((x) => (
              <div key={x.id} onClick={() => handleSelect(x)}>
                {x.name}
              </div>
            ))}
          </AutocompleteResults>
        ) : null}
      </AutocompleteWrapper>
    </StyledClickAwayListener>
  );
};

export default SearchAutocomplete;
