import React, { FC, useState } from "react";
import { Row, Col } from "components/Grid";
import { FocusItemWrapper } from "./styles";

const FOCUS_LIST = [
  { value: 0, label: "Entertainment & Fun" },
  { value: 1, label: "Inspire & Encourage" },
  { value: 2, label: "VIP Experience" },
  { value: 3, label: "Customer Reward Event" },
  { value: 4, label: "Connect My Group" },
  { value: 5, label: `I don't know` },
];

interface IFocusItemProps {
  value: number;
  label: string;
  onSelect: (value: number) => void;
  selected: number | undefined;
}

const FocusItem: FC<IFocusItemProps> = ({
  value,
  label,
  onSelect,
  selected,
}) => {
  return (
    <FocusItemWrapper
      active={selected === value}
      onClick={() => onSelect(value)}
    >
      <p />
      <h4>{label}</h4>
    </FocusItemWrapper>
  );
};

const FocusList = () => {
  const [selected, setSelected] = useState<number>();

  const handleSelect = (value: number) => {
    setSelected(value);
  };

  return (
    <div>
      <Row>
        {FOCUS_LIST.map((item) => (
          <Col md={6}>
            <FocusItem
              key={item.value}
              onSelect={handleSelect}
              selected={selected}
              {...item}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FocusList;
