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
  onChange: (value: number | string) => void;
  selected: number | string | undefined;
  name: string;
}

const InputRadio: FC<IProps> = ({ options, onChange, selected, name }) => {
  return (
    <>
      {options.map((option: OptionType) => (
        <Col key={option.id} md={6}>
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
        </Col>
      ))}
    </>
  );
};

export default InputRadio;
