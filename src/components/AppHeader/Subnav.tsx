import React, { FC, useState, lazy } from "react";
import { Container, Row, Col } from "components/Grid";
import {
  SubnavWrapper,
  BrowseTalentText,
  CaretDown,
  SubnavContainer,
  SearchBarContainer,
} from "./styles";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import ClickAwayListener from "react-click-away-listener";
import { IType } from "types";
import useScrollPosition from "@react-hook/window-scroll";
import LazyWrapper from "components/LazyWrapper";

const SearchAutocomplete = lazy(() => import("components/SearchAutocomplete"));
const TypesMenu = lazy(() => import("components/TypesMenu"));

interface IProps {
  types?: IType[];
}

const Subnav: FC<IProps> = ({ types }) => {
  const scrollY = useScrollPosition(30);
  const [showTypes, setShowTypes] = useState<boolean>(false);
  const backgroundColor =
    scrollY < 85 ? "rgba(0,0,0,0.2)" : colors.purpleBgFill;
  const boxShadow =
    scrollY > 20 ? "0px 2px 6px -2px rgba(0, 0, 0, 0.7)" : undefined;
  return (
    <SubnavWrapper
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      className="visible-md visible-lg"
    >
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <SubnavContainer justifyContent="space-between">
              <ClickAwayListener onClickAway={() => setShowTypes(false)}>
                <Box
                  cursor="pointer"
                  flexDirection="row"
                  onClick={() => setShowTypes(!showTypes)}
                  alignItems="flex-end"
                >
                  <BrowseTalentText>Browse Talent</BrowseTalentText>
                  <CaretDown />
                </Box>
              </ClickAwayListener>
              <SearchBarContainer>
                <LazyWrapper>
                  <SearchAutocomplete />
                </LazyWrapper>
              </SearchBarContainer>
            </SubnavContainer>
          </Col>
        </Row>
      </Container>
      <LazyWrapper>
        <TypesMenu
          types={types}
          show={showTypes}
          close={() => setShowTypes(false)}
        />
      </LazyWrapper>
    </SubnavWrapper>
  );
};

export default Subnav;
