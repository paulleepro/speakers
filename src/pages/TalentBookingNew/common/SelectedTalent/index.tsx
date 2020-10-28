import React, { FC } from "react";
import colors from "styles/colors";
import { Button } from "styles/components";
import CloseIcon from "assets/Icons/Close";
import { Wrapper } from "./styles";

interface IProps {
  talent: any;
  onRemove: (value: any) => void;
  variant?: string;
}

const SelectedTalent: FC<IProps> = ({ talent, onRemove, variant }) => {
  return (
    <Wrapper variant={variant}>
      {talent.name.raw || talent.name}
      <Button margin="0" padding="0" onClick={() => onRemove(talent)}>
        <CloseIcon fill={colors.white} />
      </Button>
    </Wrapper>
  );
};

export default SelectedTalent;
