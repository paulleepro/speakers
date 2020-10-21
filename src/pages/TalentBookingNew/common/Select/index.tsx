import React, { FC } from "react";

import { Select } from "./styles";
import { DropIcon } from "../../styles";

import { Wrapper, IconWrapper, Label, InputWrapper } from "../InputText/styles";

interface IOption {
  value: any;
  label: any;
}

interface IProps {
  label?: string;
  hasMargin?: boolean;
  name: string;
  onChange: (value: any) => void;
  options: IOption[];
  placeholder: string;
  value: any;
}

const CustomSelect: FC<IProps> = ({
  label,
  hasMargin,
  name,
  onChange,
  options,
  placeholder,
  value,
}) => {
  return (
    <Wrapper width="100%" flexDirection="column" hasMargin={hasMargin}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <Select
          isPlaceholder={value === ""}
          value={value}
          onChange={onChange}
          name={name}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option, idx) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <IconWrapper>
          <DropIcon />
        </IconWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default CustomSelect;
