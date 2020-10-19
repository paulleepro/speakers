import React, { FC } from "react";
import { Box } from "react-basic-blocks";

import {
  QuestionBullet,
  QuestionTitle,
  QuestionDescription,
  QuestionWrapper,
} from "./styles";

interface IProps {
  order?: number;
  title: string;
  description: string;
  icon?: any;
}

const QuestionHeader: FC<IProps> = ({ order, title, description, icon }) => {
  return (
    <QuestionWrapper>
      <Box flexDirection="row">
        {order ? (
          <QuestionBullet>{order}</QuestionBullet>
        ) : (
          <Box margin="0 16px 0 0">{icon}</Box>
        )}
        <QuestionTitle>{title}</QuestionTitle>
      </Box>
      <Box>
        <QuestionDescription>{description}</QuestionDescription>
      </Box>
    </QuestionWrapper>
  );
};

export default QuestionHeader;
