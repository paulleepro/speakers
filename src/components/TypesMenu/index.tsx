import React, { FC } from "react";
import { Container, Row, Col, Visible } from "components/Grid";
import { IType } from "types";
import { Link } from "react-router-dom";
import { TypeLink, TypesWrapper, CaretLeft } from "./styles";
import colors from "styles/colors";
import { DescriptionText, Divider, CaretRight } from "styles/components";
import { Box } from "react-basic-blocks";

const MAX_COLUMNS = 5;

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
                <DescriptionText color={colors.midGrey}>Back</DescriptionText>
              </Box>
            </Visible>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} md={9} lg={8}>
            <Visible md lg>
              <DescriptionText color={colors.midGrey}>
                Browse Types
              </DescriptionText>
            </Visible>
          </Col>
          <Col md={3}>
            <Link to="/topic" onClick={() => close && close()}>
              <Box flexDirection="row">
                <DescriptionText color={colors.primaryPurple}>
                  View All Topics
                </DescriptionText>
                <DescriptionText color={colors.primaryPurple}>
                  <CaretRight />
                </DescriptionText>
              </Box>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} lg={10} xs={12}>
            <Visible xs sm>
              <Divider width="50px" />
            </Visible>
            <Visible md lg>
              <Box
                height="1px"
                borderBottom="1px solid #2c2832"
                margin="24px 0"
              />
            </Visible>
          </Col>
        </Row>
        <Row>
          {[0, 1, 2, 3, 4].map((i) => (
            <Col
              offset={{ lg: i === 0 ? 1 : 0 }}
              md={3}
              lg={2}
              key={`type-col-${i}`}
            >
              {getTypes(i, types).map(({ name, id, slug }) => (
                <Link
                  key={id}
                  to={`/type/${slug}`}
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
