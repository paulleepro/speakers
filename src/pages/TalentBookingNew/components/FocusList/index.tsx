import React, { useState } from "react";
import { Row } from "components/Grid";
import InputRadio from "../InputRadio";

const FOCUS_LIST = [
  { id: "0", value: 0, label: "Entertainment & Fun" },
  { id: "1", value: 1, label: "Inspire & Encourage" },
  { id: "2", value: 2, label: "VIP Experience" },
  { id: "3", value: 3, label: "Customer Reward Event" },
  { id: "4", value: 4, label: "Connect My Group" },
  { id: "5", value: 5, label: `I don't know` },
];

const FocusList = () => {
  const [selected, setSelected] = useState<number | string | undefined>();

  const handleSelect = (value: number | string) => {
    setSelected(value);
  };

  return (
    <Row>
      <InputRadio
        options={FOCUS_LIST}
        selected={selected}
        onChange={handleSelect}
        name="focusList"
      />
    </Row>
  );
};

export default FocusList;
