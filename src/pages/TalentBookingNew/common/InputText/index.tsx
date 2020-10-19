import React, { FC } from "react";
import { Input, IconWrapper, Wrapper } from "./styles";

interface IProps {
  name: string;
  value?: number | string | undefined;
  placeholder?: string;
  onChange: (e: any) => void;
  icon?: any;
  margin?: string;
}

const InputText: FC<IProps> = ({
  name,
  value,
  placeholder,
  onChange,
  icon,
  margin,
}) => {
  return (
    <Wrapper
      width="100%"
      flexDirection="row"
      alignItems="center"
      margin={margin}
    >
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </Wrapper>
  );
};

export default InputText;
