import React, { FC } from "react";
import { Box } from "react-basic-blocks";

import {
  QuestionBullet,
  QuestionTitle,
  QuestionDescription,
  QuestionWrapper,
  BulletWrapper,
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
        <BulletWrapper>
          {order ? <QuestionBullet>{order}</QuestionBullet> : icon}
        </BulletWrapper>
        <QuestionTitle>{title}</QuestionTitle>
      </Box>
      <QuestionDescription>{description}</QuestionDescription>
    </QuestionWrapper>
  );
};

export default QuestionHeader;
