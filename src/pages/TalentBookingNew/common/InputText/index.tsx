import React, { FC } from "react";
import { Input, IconWrapper, Wrapper, Label, InputWrapper } from "./styles";

interface IProps {
  name: string;
  value?: number | string | undefined;
  placeholder?: string;
  onChange: (e: any) => void;
  icon?: any;
  hasMargin?: boolean;
  label?: string;
}

const InputText: FC<IProps> = ({
  name,
  value,
  placeholder,
  onChange,
  icon,
  hasMargin,
  label,
}) => {
  return (
    <Wrapper width="100%" flexDirection="column" hasMargin={hasMargin}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
    </Wrapper>
  );
};

export default InputText;
