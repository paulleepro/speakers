import React, { useState, lazy } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import colors from "styles/colors";
import { Row, Col, Visible } from "components/Grid";
import LazyWrapper from "components/LazyWrapper";
import QuestionHeader from "../../common/QuestionHeader";
import QuestionContent from "../../common/QuestionContent";
import InputText from "../../common/InputText";
import InputRadio, { RadioInputOption } from "../../common/InputRadio";
import DatePicker from "../../common/DatePicker";
import Select from "../../common/Select";

const ReactTooltip = lazy(() => import("react-tooltip"));

interface IHost {
  fullName: string;
  companyName: string;
  role: string;
  phone: string;
}

interface IEvent {
  dateStart: any;
  dateEnd: any;
  time: string;
  country: string;
  cityState: string;
}

const DetailsForm = () => {
  const [isDateFlexible, setIsDateFlexible] = useState();
  const [budgetRange, setBudgetRange] = useState("");
  const [customBudgetRange, setCustomBudgetRange] = useState("");
  const [hostInfo, setHostInfo] = useState<IHost>({
    fullName: "",
    companyName: "",
    role: "",
    phone: "",
  });

  const [eventInfo, setEventInfo] = useState<IEvent>({
    dateStart: null,
    dateEnd: null,
    time: "",
    country: "",
    cityState: "",
  });

  const handleCustomBudgetRangeChange = (e: any): void => {
    setCustomBudgetRange(e.target.value);
  };

  const handleChangeHostInfo = (e: any): void => {
    const { name, value } = e.target;

    setHostInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEventInfoChange = (e: any): void => {
    const { name, value } = e.target;

    setEventInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEventDateChange = (date: any): void => {
    setEventInfo((prev) => ({
      ...prev,
      dateStart: date,
    }));
  };

  return (
    <>
      <h3>Event Details</h3>

      <QuestionHeader
        order={1}
        title="You and your company"
        description="Tell us about yourself."
      />
      <QuestionContent>
        <Row>
          <Col md={6}>
            <InputText
              name="fullName"
              value={hostInfo.fullName}
              onChange={handleChangeHostInfo}
              label="Full Name"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <InputText
              name="companyName"
              value={hostInfo.companyName}
              onChange={handleChangeHostInfo}
              label="Company or Organization"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <InputText
              name="role"
              value={hostInfo.role}
              onChange={handleChangeHostInfo}
              label="Your Role"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <InputText
              name="phone"
              value={hostInfo.phone}
              onChange={handleChangeHostInfo}
              label="Phone Number"
              hasMargin
            />
          </Col>
        </Row>
      </QuestionContent>

      <QuestionHeader
        order={2}
        title="Event timing & location"
        description="Share event details with us."
      />
      <QuestionContent>
        <Row>
          <Col md={6}>
            <DatePicker
              icon={
                <CalendarTodayOutlinedIcon
                  style={{ color: colors.primaryPurple }}
                />
              }
              label="Date of Event"
              hasMargin
              onChange={handleEventDateChange}
              value={eventInfo.dateStart}
              placeholder="MM/DD/YYYY"
            />
          </Col>
          <Col md={6}>
            <Select
              options={[
                { value: "morning", label: "Morning" },
                { value: "midday", label: "Midday" },
                { value: "afternoon", label: "Afternoon" },
                { value: "evening", label: "Evening" },
              ]}
              onChange={handleEventInfoChange}
              value={eventInfo.time}
              name="time"
              placeholder="Time of Day"
              label="When"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <Select
              options={[{ value: "us", label: "United States" }]}
              onChange={handleEventInfoChange}
              value={eventInfo.country}
              name="country"
              placeholder="Select Country"
              label="Country"
              hasMargin
            />
          </Col>
          <Col md={6}>
            <InputText
              name="cityState"
              value={eventInfo.cityState}
              onChange={handleEventInfoChange}
              label="City, State"
              hasMargin
            />
          </Col>
        </Row>
      </QuestionContent>

      <QuestionHeader
        order={3}
        title="Are your dates flexible?"
        description="Our agents will coordinate with the speaker and your schedule to find a perfect fit."
        tooltipIcon={
          <>
            <HelpOutlineIcon
              data-tip
              data-for="your-flexible-date"
              style={{ color: colors.primaryPurple, fontSize: 30 }}
            />
            <Visible md lg>
              <LazyWrapper>
                <ReactTooltip
                  id="your-flexible-date"
                  place="right"
                  type="dark"
                  effect="float"
                  className="tooltip"
                  backgroundColor={colors.black}
                  border
                  borderColor={colors.primaryPurple}
                >
                  Being flexible allows agents to find more speakers for your
                  event, they'll search for speakers available the week
                  specified
                </ReactTooltip>
              </LazyWrapper>
            </Visible>
          </>
        }
      />
      <QuestionContent>
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
      </QuestionContent>

      <QuestionHeader
        order={4}
        title="Select your budget range"
        description="This will help us tailor your event and speaker options."
        tooltipIcon={
          <>
            <HelpOutlineIcon
              data-tip
              data-for="your-budget-range"
              style={{ color: colors.primaryPurple, fontSize: 30 }}
            />
            <Visible md lg>
              <LazyWrapper>
                <ReactTooltip
                  id="your-budget-range"
                  place="right"
                  type="dark"
                  effect="float"
                  className="tooltip"
                  backgroundColor={colors.black}
                  border
                  borderColor={colors.primaryPurple}
                >
                  Price ranges can vary from speaker to speaker
                </ReactTooltip>
              </LazyWrapper>
            </Visible>
          </>
        }
      />
      <QuestionContent>
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
            <>
              <HelpOutlineIcon
                data-tip
                data-for="your-budget-range-input"
                style={{ color: colors.primaryPurple, fontSize: 30 }}
              />
              <Visible md lg>
                <LazyWrapper>
                  <ReactTooltip
                    id="your-budget-range-input"
                    place="right"
                    type="dark"
                    effect="float"
                    className="tooltip"
                    backgroundColor={colors.black}
                    border
                    borderColor={colors.primaryPurple}
                  >
                    Price ranges can vary from speaker to speaker
                  </ReactTooltip>
                </LazyWrapper>
              </Visible>
            </>
          }
        />
      </QuestionContent>
    </>
  );
};

export default DetailsForm;
