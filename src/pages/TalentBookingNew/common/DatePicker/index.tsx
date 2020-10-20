import React, { FC, lazy } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { InputWrapper } from "./styles";
import { Wrapper, IconWrapper, Label } from "../InputText/styles";

const DatePicker = lazy(() => import("react-datepicker"));

interface IProps {
  icon?: any;
  label?: string;
  margin?: string;
  onChange: (value: any) => void;
  placeholder?: string;
  value: Date;
}

const CustomDatePicker: FC<IProps> = ({
  icon,
  label,
  margin,
  onChange,
  placeholder,
  value,
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
        <DatePicker
          className="date-picker"
          selected={value}
          placeholderText={placeholder}
          onChange={onChange}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
    </Wrapper>
  );
};

export default CustomDatePicker;
