import React, { FC } from "react";

import { Input } from "./styles";

interface IProps {
  name: string;
  value?: number | string | undefined;
  placeholder?: string;
  onChange: (e: any) => void;
}

const InputText: FC<IProps> = ({ name, value, placeholder, onChange }) => {
  return (
    <Input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputText;
