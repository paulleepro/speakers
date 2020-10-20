import React, { FC } from "react";
import { Input, IconWrapper, Wrapper, Label, InputWrapper } from "./styles";

interface IProps {
  name: string;
  value?: number | string | undefined;
  placeholder?: string;
  onChange: (e: any) => void;
  icon?: any;
  margin?: string;
  label?: string;
}

const InputText: FC<IProps> = ({
  name,
  value,
  placeholder,
  onChange,
  icon,
  margin,
  label,
}) => {
  return (
    <Wrapper
      width="100%"
      flexDirection="row"
      alignItems="center"
      margin={margin}
    >
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
