import React, { forwardRef } from "react";
import { Input, IconWrapper, Wrapper } from "./styles";

interface IProps {
  name: string;
  value?: number | string | undefined;
  placeholder?: string;
  onChange: (e: any) => void;
  icon?: any;
  margin?: string;
  dense?: boolean;
}

const InputText = forwardRef<HTMLInputElement, IProps>(
  ({ name, value, placeholder, onChange, icon, margin, dense }, ref) => {
    return (
      <Wrapper
        width="100%"
        flexDirection="row"
        alignItems="center"
        margin={margin}
      >
        <Input
          ref={ref}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          dense={dense}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </Wrapper>
    );
  }
);

export default InputText;
