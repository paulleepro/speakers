import React, { FC, useState } from "react";
import { SidebarContainer, CloseWrapper } from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { DescriptionText, Divider } from "styles/components";
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
  return (
    <SidebarContainer className={show ? "open" : ""}>
      <CloseWrapper
        onClick={() => {
          setShow(false);
          setShowTypes(false);
        }}
      >
        <CloseIcon style={{ color: "#FFF" }} />
      </CloseWrapper>

      {!showTypes ? (
        <>
          <SearchAutocomplete />

          <Link to="/how-it-works" onClick={() => setShow(false)}>
            <DescriptionText noCenterAlign weight="bold" margin="40px 0 20px 0">
              How It Works
            </DescriptionText>
          </Link>
          <Link to="/how-it-works" onClick={() => setShow(false)}>
            <DescriptionText noCenterAlign weight="bold">
              Explore
            </DescriptionText>
          </Link>
          <Divider width="50px" />
          <Box cursor="pointer" onClick={() => setShowTypes(true)}>
            <DescriptionText noCenterAlign weight="bold">
              Browse Talent
            </DescriptionText>
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
