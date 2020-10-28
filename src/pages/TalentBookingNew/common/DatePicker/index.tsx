import React, { FC, lazy } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { InputWrapper } from "./styles";
import { Wrapper, IconWrapper, Label } from "../InputText/styles";

const DatePicker = lazy(() => import("react-datepicker"));

interface IProps {
  icon?: any;
  label?: string;
  hasMargin?: boolean;
  onDateChange: (value: any) => void;
  placeholder?: string;
  value: any;
}

const CustomDatePicker: FC<IProps> = ({
  icon,
  label,
  hasMargin,
  onDateChange,
  placeholder,
  value,
}) => {
  return (
    <Wrapper width="100%" flexDirection="column" hasMargin={hasMargin}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <DatePicker
          className="date-picker"
          selected={value}
          placeholderText={placeholder}
          onChange={(date) => onDateChange(date)}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
    </Wrapper>
  );
};

export default CustomDatePicker;
