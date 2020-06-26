import React, { FC } from "react";
import { Wrapper, LinkText } from "./styles";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { IType } from "types";
import Subnav from "./Subnav";

interface IProps {
  types?: IType[];
}

const BigHeader: FC<IProps> = ({ types }) => {
  return (
    <>
      <Wrapper backgroundColor="transparent" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center">
          <Link to="/">
            <img src="/logo.png" height="40" alt="logo" />
          </Link>
        </Box>

        <Box flexDirection="row" alignItems="center">
          <Link to="/how-it-works">
            <LinkText>How it Works</LinkText>
          </Link>
          <Link to="/explore">
            <LinkText>Explore</LinkText>
          </Link>
        </Box>
      </Wrapper>
      <Subnav types={types} />
    </>
  );
};

export default BigHeader;
