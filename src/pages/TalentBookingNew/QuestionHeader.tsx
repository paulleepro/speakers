import React, { FC } from "react";
import { Container, Row } from "components/Grid";

import {
  QuestionBullet,
  QuestionTitle,
  QuestionDescription,
  QuestionWrapper,
} from "./styles";

interface IProps {
  order: number;
  title: string;
  description: string;
}

const QuestionHeader: FC<IProps> = ({ order, title, description }) => {
  return (
    <QuestionWrapper>
      <Container fluid>
        <Row>
          <QuestionBullet>{order}</QuestionBullet>
          <QuestionTitle>{title}</QuestionTitle>
        </Row>
        <Row>
          <QuestionDescription>{description}</QuestionDescription>
        </Row>
      </Container>
    </QuestionWrapper>
  );
};

export default QuestionHeader;
