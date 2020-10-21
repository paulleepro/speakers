import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import AddIcon from "@material-ui/icons/Add";
import colors from "styles/colors";
import { ITopic, IType } from "types";
import Select from "../../common/Select";
import { AddAnother } from "./styles";

interface IProps {
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
  name?: string;
  list?: ITopic[] | IType[];
  type?: string;
}

const Topics: FC<IProps> = ({
  value,
  onChange,
  name = "themes",
  placeholder = "Choose a Topic",
  list = [],
  type = "topic",
}) => {
  const options = list.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  return (
    <>
      <Select
        options={options}
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
