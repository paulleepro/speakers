import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import AddIcon from "@material-ui/icons/Add";
import colors from "styles/colors";
import InputText from "../../common/InputText";
import { AddAnother } from "./styles";
import { DropIcon } from "../../styles";

interface IProps {
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
  name?: string;
}

const Topics: FC<IProps> = ({
  value,
  onChange,
  name = "themes",
  placeholder = "Choose a Topic",
}) => {
  return (
    <>
      <InputText
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        icon={<DropIcon />}
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
