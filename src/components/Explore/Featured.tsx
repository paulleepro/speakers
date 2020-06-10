import React, { FC } from "react";
import { HeaderText, DescriptionText } from "styles/components";
import { Container, Row, Col, Visible } from "react-grid-system";
import { Box } from "react-basic-blocks";
import { IListResult, ITalent } from "types";
import SwipeableCards from "components/shared/SwipeableCards";
import FeaturedCards from "components/shared/FeaturedCards";

interface IProps {
  data: IListResult<ITalent>;
}

const Featured: FC<IProps> = ({ data }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
              margin="120px 0 0 0"
            >
              <HeaderText>Featured</HeaderText>
              <DescriptionText>See All</DescriptionText>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <Visible lg md>
              <FeaturedCards talentList={data.data} />
            </Visible>
            <Visible xs sm>
              <SwipeableCards talentList={data.data} />
            </Visible>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Featured;
