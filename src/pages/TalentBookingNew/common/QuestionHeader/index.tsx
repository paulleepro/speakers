import React, { FC } from "react";
import { Box } from "react-basic-blocks";

import {
  QuestionBullet,
  QuestionTitle,
  QuestionDescription,
  QuestionWrapper,
  BulletWrapper,
  TooltipWrapper,
} from "./styles";

interface IProps {
  order?: number;
  title: string;
  description: string;
  icon?: any;
  tooltipIcon?: any;
}

const QuestionHeader: FC<IProps> = ({
  order,
  title,
  description,
  icon,
  tooltipIcon,
}) => {
  return (
    <QuestionWrapper>
      <Box flexDirection="row">
        <BulletWrapper>
          {order ? <QuestionBullet>{order}</QuestionBullet> : icon}
        </BulletWrapper>
        <QuestionTitle>{title}</QuestionTitle>
        {tooltipIcon && <TooltipWrapper>{tooltipIcon}</TooltipWrapper>}
      </Box>
      <QuestionDescription>{description}</QuestionDescription>
    </QuestionWrapper>
  );
};

export default QuestionHeader;
