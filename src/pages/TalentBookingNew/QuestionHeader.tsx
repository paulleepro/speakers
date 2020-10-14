import React, { FC } from "react";
import { Row, Col } from "components/Grid";

import { QuestionBullet, QuestionTitle, QuestionDescription } from "./styles";

interface IProps {
  order: number;
  title: string;
  description: string;
}

const QuestionHeader: FC<IProps> = ({ order, title, description }) => {
  return (
    <>
      <Row>
        <Col md={1}>
          <QuestionBullet>{order}</QuestionBullet>
        </Col>
        <Col md={11}>
          <QuestionTitle>{title}</QuestionTitle>
        </Col>
      </Row>
      <Row>
        <Col offset={{ md: 1 }}>
          <QuestionDescription>{description}</QuestionDescription>
        </Col>
      </Row>
    </>
  );
};

export default QuestionHeader;
