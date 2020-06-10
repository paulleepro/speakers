import React, { FC } from "react";
import { Wrapper, LinkText } from "./styles";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import colors from "styles/colors";

const BigHeader: FC = () => {
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
          <img src="/logo.png" width="139" height="22" alt="logo" />
        </Link>
      </Box>

      <Box flexDirection="row" alignItems="center">
        <Link to="/explore">
          <SearchIcon style={{ color: colors.lightGrey }} />
        </Link>
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
