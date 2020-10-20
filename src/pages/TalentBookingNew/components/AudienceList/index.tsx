import React, { useState } from "react";
import { Row, Col } from "components/Grid";

import InputText from "../../common/InputText";
import InputRadio from "../../common/InputRadio";

const AUDIENCE_LIST = [
  { id: "0", value: 0, label: "Full Organization" },
  { id: "1", value: 1, label: "Professional Group" },
  { id: "2", value: 2, label: "Team or Department" },
  { id: "3", value: 3, label: "Customers" },
  { id: "4", value: 4, label: "Students" },
];

const AudienceList = () => {
  const [selected, setSelected] = useState<number | string | undefined>();
  const [ownOption, setOwnOption] = useState<string>("");

  const handleSelect = (value: number | string) => {
    setSelected(value);
  };

  const handleOwnOptionChange = (e: any): void => {
    setOwnOption(e.target.value);
  };

  return (
    <Row>
      <InputRadio
        options={AUDIENCE_LIST}
        selected={selected}
        onChange={handleSelect}
        name="audienceList"
      />
      <Col md={6}>
        <InputText
          name="own"
          value={ownOption}
          onChange={handleOwnOptionChange}
          placeholder="Enter your own…"
        />
      </Col>
    </Row>
  );
};

export default AudienceList;
