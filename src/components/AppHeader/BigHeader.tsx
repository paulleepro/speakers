import React, { FC, useState } from "react";
import { Wrapper, LinkText, SearchWrapper, CaretDown } from "./styles";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import colors from "styles/colors";
import SearchAutocomplete from "components/SearchAutocomplete";
import ClickAwayListener from "react-click-away-listener";
import { IType } from "types";
import TypesMenu from "components/TypesMenu";

interface IProps {
  types?: IType[];
}

const BigHeader: FC<IProps> = ({ types }) => {
  const [searchExtended, setSearchExtended] = useState<boolean>(false);
  const [showTypes, setShowTypes] = useState<boolean>(false);
  const backgroundColor = colors.black;
  return (
    <Wrapper
      flexDirection="row"
      justifyContent="space-between"
      className="app-header"
      backgroundColor={backgroundColor}
    >
      <Box flexDirection="row" alignItems="center">
        <Link to="/">
          <img src="/logo.png" height="40" alt="logo" />
        </Link>
      </Box>

      <Box flexDirection="row" alignItems="center">
        <SearchWrapper searchExtended={searchExtended}>
          {searchExtended ? (
            <SearchAutocomplete onClickAway={() => setSearchExtended(false)} />
          ) : (
            <Box
              onClick={() => setSearchExtended(!searchExtended)}
              cursor="pointer"
            >
              <SearchIcon style={{ color: colors.lightGrey }} />
            </Box>
          )}
        </SearchWrapper>
        <ClickAwayListener onClickAway={() => setShowTypes(false)}>
          <Box
            cursor="pointer"
            flexDirection="row"
            onClick={() => setShowTypes(!showTypes)}
            alignItems="flex-end"
          >
            <LinkText>Browse Talent</LinkText>
            <CaretDown />
          </Box>
          <TypesMenu
            types={types}
            show={showTypes}
            close={() => setShowTypes(false)}
          />
        </ClickAwayListener>
        <Link to="/how-it-works">
          <LinkText>How it Works</LinkText>
        </Link>
        <Link to="/explore">
          <LinkText>Explore</LinkText>
        </Link>
      </Box>
    </Wrapper>
  );
};

export default BigHeader;
