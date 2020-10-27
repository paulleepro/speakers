import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { QuestionBullet } from "../../common/QuestionHeader/styles";
import { Field } from "./styles";

interface IFieldSectionProps {
  order: string | number;
  label: string;
  value?: string;
  fields?: string[];
}

const FieldSection: FC<IFieldSectionProps> = ({ order, label, value }) => {
  if (!value) {
    return null;
  }

  return (
    <Box flexDirection="row">
      <QuestionBullet margin="0 8px 0 0">{order}</QuestionBullet>
      <Box flexDirection="column" margin="0 0 16px 0">
        <Field>
          <span>{label}:</span>
          {value}
        </Field>
      </Box>
    </Box>
  );
};

export default FieldSection;
