import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { HeaderText, Button } from "styles/components";
import { Box } from "react-basic-blocks";

interface IProps {
  name: string;
}

const MoreLike: FC<IProps> = ({ name }) => {
  return (
    <Container fluid>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <Box margin="80px 0 0 0">
            <HeaderText>More talent like {name}</HeaderText>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col offset={{ lg: 1 }} xs={6} md={3} lg={2.5}>
          <div></div>
        </Col>
        <Col xs={6} md={3} lg={2.5}>
          <div></div>
        </Col>
        <Col xs={6} md={3} lg={2.5}>
          <div></div>
        </Col>
        <Col xs={6} md={3} lg={2.5}>
          <div></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Box alignItems="center">
            <Button margin="40px 0">Explore All</Button>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default MoreLike;
