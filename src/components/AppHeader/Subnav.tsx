import React, { FC, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  SubnavWrapper,
  LinkText,
  CaretDown,
  SubnavContainer,
  SearchBarContainer,
} from "./styles";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import SearchAutocomplete from "components/SearchAutocomplete";
import ClickAwayListener from "react-click-away-listener";
import { IType } from "types";
import TypesMenu from "components/TypesMenu";
import useScrollPosition from "@react-hook/window-scroll";

interface IProps {
  types?: IType[];
}

const Subnav: FC<IProps> = ({ types }) => {
  const scrollY = useScrollPosition(30);
  const [showTypes, setShowTypes] = useState<boolean>(false);
  const backgroundColor = scrollY < 20 ? "transparent" : colors.purpleBgFill;
  return (
    <SubnavWrapper backgroundColor={backgroundColor}>
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
                  <LinkText noMargin>Browse Talent</LinkText>
                  <CaretDown />
                </Box>
              </ClickAwayListener>
              <SearchBarContainer>
                <SearchAutocomplete />
              </SearchBarContainer>
            </SubnavContainer>
          </Col>
        </Row>
      </Container>
      <TypesMenu
        types={types}
        show={showTypes}
        close={() => setShowTypes(false)}
      />
    </SubnavWrapper>
  );
};

export default Subnav;
