import React, { FC } from "react";
import Divider from "@material-ui/core/Divider";
import { Wrapper, LinkText } from "./styles";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { IType } from "types";

import { Button } from "styles/components";

interface IProps {
  types?: IType[];
}

const BigHeader: FC<IProps> = ({ types }) => {
  return (
    <>
      <Wrapper backgroundColor="rgba(0,0,0,0.2)" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center">
          <Link to="/">
            <img src="/logo.png" height="17" width="184" alt="logo" />
          </Link>
        </Box>

        <Box flexDirection="row" alignItems="center">
          <Link to="/how-it-works">
            <LinkText>How it Works</LinkText>
          </Link>
          <Link to="/explore">
            <LinkText>Explore</LinkText>
          </Link>
          <Link to="/favorites">
            <Divider orientation="vertical" flexItem />
            <LinkText>Favorites List</LinkText>
            <Divider orientation="vertical" flexItem />
          </Link>
          <Link to="/explore">
            <LinkText>Sign In</LinkText>
          </Link>
          <Button margin="">Sign Up</Button>
        </Box>
      </Wrapper>
    </>
  );
};

export default BigHeader;
