import React, { FC } from "react";
import { Container, Row, Col, Visible } from "react-grid-system";
import { IType } from "types";
import { Link } from "react-router-dom";
import { TypeLink, TypesWrapper, CaretRight, CaretLeft } from "./styles";
import colors from "styles/colors";
import { DescriptionText, Divider } from "styles/components";
import { Box } from "react-basic-blocks";

const MAX_COLUMNS = 4;

const getTypes = (i: number, types: IType[]) => {
  const colLength = Math.floor(types.length) / MAX_COLUMNS;
  if (i === MAX_COLUMNS - 1) {
    return types.slice(colLength * i);
  } else {
    return types.slice(i * colLength, colLength * (i + 1));
  }
};

interface IProps {
  types?: IType[];
  show?: boolean;
  setShow?: (show: boolean) => void;
  close: () => void;
}

const TypesMenu: FC<IProps> = ({ types, show, setShow, close }) => {
  if (!types || !show) {
    return null;
  }

  return (
    <TypesWrapper>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }}>
            <Visible xs sm>
              <Box
                margin="0 0 20px 0"
                cursor="pointer"
                flexDirection="row"
                alignItems="center"
                onClick={() => setShow && setShow(false)}
              >
                <CaretLeft />
                <DescriptionText color={colors.midGrey}>
                  Go Back
                </DescriptionText>
              </Box>
            </Visible>
            <Box flexDirection="row" margin="0 0 20px 0">
              <Visible md lg>
                <DescriptionText color={colors.midGrey}>
                  Browse Types
                </DescriptionText>
                <DescriptionText color={colors.purpleBgFill} margin="0 10px">
                  |
                </DescriptionText>
              </Visible>
              <Link to="/topic" onClick={() => close && close()}>
                <Box flexDirection="row">
                  <DescriptionText color={colors.primaryPurple}>
                    Browse By Topics
                  </DescriptionText>
                  <DescriptionText color={colors.primaryPurple}>
                    <CaretRight />
                  </DescriptionText>
                </Box>
              </Link>
            </Box>
            <Visible xs sm>
              <Divider width="50px" />
            </Visible>
          </Col>
        </Row>
        <Row>
          {[0, 1, 2, 3].map((i) => (
            <Col
              offset={{ lg: i === 0 ? 1 : 0 }}
              md={3}
              lg={2.5}
              key={`type-col-${i}`}
            >
              {getTypes(i, types).map(({ name, id }) => (
                <Link
                  key={id}
                  to={`/type/${id}`}
                  onClick={() => close && close()}
                >
                  <TypeLink>{name}</TypeLink>
                </Link>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </TypesWrapper>
  );
};

export default TypesMenu;
