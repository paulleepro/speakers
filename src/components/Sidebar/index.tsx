import React, { FC, useState } from "react";
import { SidebarContainer, IconWrapper } from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { DescriptionText, Divider, CaretRight } from "styles/components";
import SearchAutocomplete from "components/SearchAutocomplete";
import { Box } from "react-basic-blocks";
import { IType } from "types";
import TypesMenu from "components/TypesMenu";

interface IProps {
  show?: boolean;
  setShow: (show: boolean) => void;
  types?: IType[];
}

const Sidebar: FC<IProps> = ({ show, setShow, types }) => {
  const [showTypes, setShowTypes] = useState<boolean>(false);
  const close = () => {
    setShow(false);
    setShowTypes(false);
  };
  return (
    <SidebarContainer className={show ? "open" : ""}>
      <IconWrapper>
        <Link to="/" onClick={() => close()} style={{ marginTop: 5 }}>
          <img src="/logo.png" height="17" width="184" alt="logo" />
        </Link>
        <CloseIcon style={{ color: "#FFF" }} onClick={close} />
      </IconWrapper>

      {!showTypes ? (
        <>
          <SearchAutocomplete close={close} />

          <Link to="/how-it-works" onClick={() => close()}>
            <DescriptionText noCenterAlign weight="bold" margin="40px 0 20px 0">
              How It Works
            </DescriptionText>
          </Link>
          <Link to="/explore" onClick={() => close()}>
            <DescriptionText noCenterAlign weight="bold">
              Explore
            </DescriptionText>
          </Link>
          <Divider width="50px" />
          <Box
            cursor="pointer"
            onClick={() => setShowTypes(true)}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center"
          >
            <DescriptionText noCenterAlign weight="bold">
              Browse Talent
            </DescriptionText>
            <CaretRight />
          </Box>
          <Divider width="50px" />
        </>
      ) : (
        <TypesMenu
          types={types}
          show
          setShow={setShowTypes}
          close={() => setShow(false)}
        />
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
