import React, { FC, useState, lazy } from "react";
import { Wrapper, MenuContainer } from "./styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import colors from "styles/colors";
import { IType } from "types";
import LazyWrapper from "components/LazyWrapper";

const Sidebar = lazy(() => import("components/Sidebar"));

interface IProps {
  types?: IType[];
}

const SmallHeader: FC<IProps> = ({ types }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <LazyWrapper>
        <Sidebar show={showSidebar} setShow={setShowSidebar} types={types} />
      </LazyWrapper>
      <Wrapper backgroundColor={colors.black} justifyContent="center">
        <Link to="/">
          <img src="/logo.png" height="17" width="184" alt="logo" />
        </Link>

        <MenuContainer onClick={() => setShowSidebar(true)}>
          <MenuIcon style={{ color: colors.lightGrey }} />
        </MenuContainer>
      </Wrapper>
    </>
  );
};

export default SmallHeader;
