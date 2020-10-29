import React, { FC } from "react";

import { Col } from "components/Grid";
import { InputWrapper, RadioButton } from "./styles";

interface OptionType {
  id: string | undefined;
  value: number | string;
  label: string;
}

interface IProps {
  options: Array<OptionType>;
  onChange: (value: any) => void;
  selected: number | string | undefined;
  name: string;
}

interface IOptionProps {
  option: OptionType;
  selected: number | string | undefined;
  onChange: (value: any) => void;
  name: string;
}

const RadioInputOption: FC<IOptionProps> = ({
  option,
  selected,
  onChange,
  name,
}) => {
  return (
    <InputWrapper
      active={option.value === selected}
      onClick={() => onChange(option.value)}
    >
      <label>
        <input
          type="radio"
          id={option.id}
          name={name}
          value={option.value}
          checked={option.value === selected}
        />
        {option.label}
        <RadioButton checked={option.value === selected} />
      </label>
    </InputWrapper>
  );
};

const InputRadio: FC<IProps> = ({ options, onChange, selected, name }) => {
  return (
    <>
      {options.map((option: OptionType) => (
        <Col key={option.id} md={6}>
          <RadioInputOption
            option={option}
            selected={selected}
            onChange={onChange}
            name={name}
          />
        </Col>
      ))}
    </>
  );
};

export { RadioInputOption };
export default InputRadio;
