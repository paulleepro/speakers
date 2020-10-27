import React, { FC } from "react";
import RemoveIcon from "@material-ui/icons/Remove";

import { Select } from "./styles";
import { DropIcon } from "../../styles";
import { Button } from "styles/components";

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
  const noValue = value === null || value === undefined || value === "";

  const removeValue = () => {
    onChange({
      target: {
        value: "",
        name,
      },
    });
  };

  return (
    <Wrapper width="100%" flexDirection="column" hasMargin={hasMargin}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <Select
          isPlaceholder={value === "" || value === undefined}
          value={value}
          onChange={onChange}
          name={name}
          haveValue={!noValue}
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
          {!noValue ? (
            <Button margin="0" padding="0" onClick={removeValue}>
              <RemoveIcon style={{ fontSize: 26 }} />
            </Button>
          ) : (
            <DropIcon />
          )}
        </IconWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default CustomSelect;
