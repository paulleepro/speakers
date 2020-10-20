import React, { FC } from "react";

import { Input } from "./styles";

interface IProps {
  rows?: number;
  name: string;
  value?: number | string | undefined;
  placeholder?: string;
  onChange: (e: any) => void;
}

const InputText: FC<IProps> = ({
  rows,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <Input
      rows={rows}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputText;
