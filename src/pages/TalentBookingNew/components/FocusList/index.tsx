import React, { FC } from "react";
import { Row } from "components/Grid";
import InputRadio from "../../common/InputRadio";

interface IProps {
  selected: string;
  onSelect: (value: string) => void;
}

const FOCUS_LIST = [
  { id: "0", value: "Entertainment & Fun", label: "Entertainment & Fun" },
  { id: "1", value: "Inspire & Encourage", label: "Inspire & Encourage" },
  { id: "2", value: "VIP Experience", label: "VIP Experience" },
  { id: "3", value: "Customer Reward Event", label: "Customer Reward Event" },
  { id: "4", value: "Connect My Group", label: "Connect My Group" },
  { id: "5", value: "I don't know", label: `I don't know` },
];

const FocusList: FC<IProps> = ({ selected, onSelect }) => {
  return (
    <Row>
      <InputRadio
        options={FOCUS_LIST}
        selected={selected}
        onChange={onSelect}
        name="event_focus"
      />
    </Row>
  );
};

export default FocusList;
