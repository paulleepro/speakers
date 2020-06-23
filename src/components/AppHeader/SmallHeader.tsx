import React, { FC, useState } from "react";
import { Wrapper, MenuContainer } from "./styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import colors from "styles/colors";
import Sidebar from "components/Sidebar";
import { IType } from "types";

interface IProps {
  types?: IType[];
}

const SmallHeader: FC<IProps> = ({ types }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <Sidebar show={showSidebar} setShow={setShowSidebar} types={types} />
      <Wrapper backgroundColor={colors.black} justifyContent="center">
        <Link to="/">
          <img src="/logo.png" height="40" alt="logo" />
        </Link>

        <MenuContainer onClick={() => setShowSidebar(true)}>
          <MenuIcon style={{ color: colors.lightGrey }} />
        </MenuContainer>
      </Wrapper>
    </>
  );
};

export default SmallHeader;
