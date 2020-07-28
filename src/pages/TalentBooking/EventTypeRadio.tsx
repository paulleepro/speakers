import React, { FC } from "react";
import { DescriptionText } from "styles/components";
import { Col } from "components/Grid";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import snakecase from "lodash.snakecase";

interface IETProps {
  label: string;
  eventTypes: string[];
  setValue: (field: string, value: any) => void;
}

const EventTypeRadio: FC<IETProps> = ({ label, eventTypes = [], setValue }) => {
  const key = snakecase(label);
  const checked = eventTypes.includes(key);
  const onClick = () => {
    setValue(
      "options.event_type_options",
      checked ? eventTypes.filter((x) => x !== key) : eventTypes.concat(key)
    );
  };

  return (
    <Col xs={12} sm={6}>
      <Box
        borderRadius="12px"
        cursor="pointer"
        border={`1px solid ${colors.purpleLiner}`}
        padding="24px"
        margin="5px 0"
        onClick={onClick}
        flexDirection="row"
        alignItems="center"
        backgroundColor="#000000"
      >
        {checked ? (
          <RadioButtonCheckedIcon style={{ color: colors.primaryPurple }} />
        ) : (
          <RadioButtonUncheckedIcon />
        )}
        <DescriptionText weight="bold" margin="0  0 0 10px">
          {label}
        </DescriptionText>
      </Box>
    </Col>
  );
};

export default EventTypeRadio;
