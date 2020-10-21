import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import AddIcon from "@material-ui/icons/Add";
import colors from "styles/colors";
import { ITopic } from "types";
import Select from "../../common/Select";
import { AddAnother } from "./styles";

interface IProps {
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
  name?: string;
  topics?: ITopic[];
}

const Topics: FC<IProps> = ({
  value,
  onChange,
  name = "themes",
  placeholder = "Choose a Topic",
  topics = [],
}) => {
  return (
    <>
      <Select
        options={topics.map(({ name, id, subtopics }) => ({
          value: id,
          label: name,
        }))}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        hasMargin
      />
      <Box width="100%" flexDirection="row" alignItems="center">
        <AddAnother>Add another</AddAnother>
        <Box margin="0 -54px">
          <AddIcon style={{ color: colors.primaryPurple, fontSize: 40 }} />
        </Box>
      </Box>
    </>
  );
};

export default Topics;
