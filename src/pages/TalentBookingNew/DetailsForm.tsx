import React, { useState } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import colors from "styles/colors";
import { Row, Col } from "components/Grid";
import QuestionHeader from "./common/QuestionHeader";
import InputText from "./common/InputText";
import InputRadio, { RadioInputOption } from "./common/InputRadio";

const DetailsForm = () => {
  const [isDateFlexible, setIsDateFlexible] = useState();
  const [budgetRange, setBudgetRange] = useState("");
  const [customBudgetRange, setCustomBudgetRange] = useState("");

  const handleCustomBudgetRangeChange = (e: any): void => {
    setCustomBudgetRange(e.target.value);
  };

  return (
    <>
      <h3>Event Details</h3>
      <Row>
        <Col>
          <QuestionHeader
            order={1}
            title="You and your company"
            description="Tell us about yourself."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={2}
            title="Event timing & location"
            description="Share event details with us."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={3}
            title="Are your dates flexible?"
            description="Our agents will coordinate with the speaker and your schedule to find a perfect fit."
          />
          <Row>
            <InputRadio
              options={[
                { id: "yes", value: "yes", label: "Yes" },
                { id: "no", value: "no", label: "No" },
              ]}
              name="isDateFlexible"
              selected={isDateFlexible}
              onChange={(value: any) => setIsDateFlexible(value)}
            />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={4}
            title="Select your budget range"
            description="This will help us tailor your event and speaker options."
          />
          <Row>
            {[
              { id: "low", value: "low", label: "$10,000 & Under" },
              { id: "middle", value: "middle", label: "$10,000 - $20,000" },
              { id: "high", value: "high", label: "$20,000 & Up" },
            ].map((option) => (
              <Col md={4}>
                <RadioInputOption
                  key={option.id}
                  option={option}
                  name="budgetRange"
                  selected={budgetRange}
                  onChange={(value: any) => setBudgetRange(value)}
                />
              </Col>
            ))}
          </Row>
          <InputText
            name="customBudgetRange"
            value={customBudgetRange}
            onChange={handleCustomBudgetRangeChange}
            placeholder="Have a specific budget?"
            icon={
              <HelpOutlineIcon
                style={{ color: colors.primaryPurple, fontSize: 30 }}
              />
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default DetailsForm;
