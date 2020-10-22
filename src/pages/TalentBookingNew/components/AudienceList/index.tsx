import React, { FC } from "react";
import { Row, Col } from "components/Grid";

import InputText from "../../common/InputText";
import InputRadio from "../../common/InputRadio";

const AUDIENCE_LIST = [
  { id: "0", value: "Full Organization", label: "Full Organization" },
  { id: "1", value: "Professional Group", label: "Professional Group" },
  { id: "2", value: "Team or Department", label: "Team or Department" },
  { id: "3", value: "Customers", label: "Customers" },
  { id: "4", value: "Students", label: "Students" },
];

interface IProps {
  selected: string;
  onChange: (value: string) => void;
}

const AudienceList: FC<IProps> = ({ selected, onChange }) => {
  const handleSelect = (value: string) => {
    onChange(value);
  };

  const handleOwnOptionChange = (e: any): void => {
    onChange(e.target.value);
  };

  return (
    <Row>
      <InputRadio
        options={AUDIENCE_LIST}
        selected={selected}
        onChange={handleSelect}
        name="event_audience"
      />
      <Col md={6}>
        <InputText
          name="event_audience"
          value={selected}
          onChange={handleOwnOptionChange}
          placeholder="Enter your own…"
        />
      </Col>
    </Row>
  );
};

export default AudienceList;
