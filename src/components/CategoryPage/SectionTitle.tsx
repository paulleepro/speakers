import React, { FC } from "react";
import { Row, Col } from "react-grid-system";
import { Box } from "react-basic-blocks";
import { HeaderText } from "styles/components";

interface IProps {
  title: string;
}

const SectionTitle: FC<IProps> = ({ title }) => (
  <Row>
    <Col offset={{ lg: 1 }} lg={10}>
      <Box margin="80px 0 0 0">
        <HeaderText>{title}</HeaderText>
      </Box>
    </Col>
  </Row>
);

export default SectionTitle;
