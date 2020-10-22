import React, { FC } from "react";
import { Row } from "components/Grid";

import InputRadio from "../../common/InputRadio";

const AUDIENCE_SIZE = [
  { id: "0", value: "0:25", label: "0 - 25" },
  { id: "1", value: "25:100", label: "25 - 100 " },
  { id: "2", value: "100:500", label: "100 - 500" },
  { id: "3", value: "500", label: "500+" },
];

interface IProps {
  selected: string;
  onSelect: (value: string) => void;
}

const AudienceSize: FC<IProps> = ({ selected, onSelect }) => {
  return (
    <Row>
      <InputRadio
        options={AUDIENCE_SIZE}
        selected={selected}
        onChange={onSelect}
        name="event_audience_size_range"
      />
    </Row>
  );
};

export default AudienceSize;
