import React, { FC } from "react";
import { Wrapper, MenuContainer } from "./styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import colors from "styles/colors";

const SmallHeader: FC = () => {
  const backgroundColor = colors.black;
  return (
    <Wrapper
      flexDirection="row"
      className="app-header"
      justifyContent="center"
      alignItems="center"
      backgroundColor={backgroundColor}
    >
      <Link to="/">
        <img src="/logo.png" width="139" height="22" alt="logo" />
      </Link>

      <MenuContainer>
        <MenuIcon style={{ color: colors.lightGrey }} />
      </MenuContainer>
    </Wrapper>
  );
};

export default SmallHeader;
