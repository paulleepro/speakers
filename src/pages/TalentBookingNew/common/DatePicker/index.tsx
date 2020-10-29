import React, { FC, lazy } from "react";
import "react-datepicker/dist/react-datepicker.css";

import LazyWrapper from "components/LazyWrapper";
import { InputWrapper } from "./styles";
import { Wrapper, IconWrapper, Label } from "../InputText/styles";

const DatePicker = lazy(() => import("react-datepicker"));

interface IProps {
  icon?: any;
  label?: string;
  hasMargin?: boolean;
  onChange: (value: any) => void;
  placeholder?: string;
  value: Date;
}

const CustomDatePicker: FC<IProps> = ({
  icon,
  label,
  hasMargin,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <Wrapper width="100%" flexDirection="column" hasMargin={hasMargin}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <LazyWrapper>
          <DatePicker
            className="date-picker"
            selected={value}
            placeholderText={placeholder}
            onChange={onChange}
          />
        </LazyWrapper>
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
    </Wrapper>
  );
};

export default CustomDatePicker;
