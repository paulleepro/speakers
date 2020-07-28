import React, { FC } from "react";
import { Row, Col } from "components/Grid";
import { DescriptionText } from "styles/components";
import colors from "styles/colors";
import { Box } from "react-basic-blocks";

interface IProps {
  question: string;
  answer: string;
}

const QuestionAnswer: FC<IProps> = ({ question, answer }) => {
  return (
    <Row>
      <Col offset={{ lg: 1 }} xs={12} lg={10}>
        <DescriptionText
          weight="bold"
          margin="0 0 80px 0"
          color={colors.midGrey}
        >
          {question}
        </DescriptionText>
        <Box
          borderBottom={`1px solid ${colors.purpleBgFill}`}
          margin="15px 0 32px 0"
        />
        <DescriptionText>{answer}</DescriptionText>
      </Col>
    </Row>
  );
};

export default QuestionAnswer;
