import React, { useState } from "react";
import { Row } from "components/Grid";

import InputRadio from "../InputRadio";

const AUDIENCE_SIZE = [
  { id: "0", value: 0, label: "0 - 25" },
  { id: "1", value: 1, label: "25 - 100 " },
  { id: "2", value: 2, label: "100 - 500" },
  { id: "3", value: 3, label: "500+" },
];

const AudienceSize = () => {
  const [selected, setSelected] = useState<number | string | undefined>();

  const handleSelect = (value: number | string) => {
    setSelected(value);
  };

  return (
    <Row>
      <InputRadio
        options={AUDIENCE_SIZE}
        selected={selected}
        onChange={handleSelect}
        name="audienceSize"
      />
    </Row>
  );
};

export default AudienceSize;
