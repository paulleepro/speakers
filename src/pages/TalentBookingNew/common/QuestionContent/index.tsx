import React, { FC } from "react";

import { Wrapper } from "./styles";

const QuestionContent: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default QuestionContent;
