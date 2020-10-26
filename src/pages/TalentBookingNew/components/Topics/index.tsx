import React, { FC, useEffect } from "react";
import { Box } from "react-basic-blocks";
import AddIcon from "@material-ui/icons/Add";
import colors from "styles/colors";
import { ITopic, IType } from "types";
import Select from "../../common/Select";
import { AddAnother } from "./styles";

interface IProps {
  activeItems: string[];
  onChange: (items: any[]) => void;
  placeholder?: string;
  name?: string;
  list?: ITopic[] | IType[];
  type?: string;
}

const Topics: FC<IProps> = ({
  activeItems,
  onChange,
  name = "themes",
  placeholder = "Choose a Topic",
  list = [],
  type = "topic",
}) => {
  useEffect(() => {
    if (!activeItems.length) {
      onChange([""]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddAnother = () => {
    onChange([...activeItems, ""]);
  };

  const handleChange = (e: any, idx: number): void => {
    const newActiveItems = activeItems.map((item, i) =>
      idx === i ? e.target.value : item
    );
    onChange(newActiveItems);
  };

  const options = list.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  return (
    <>
      {activeItems.map((item, idx) => {
        return (
          <Select
            key={idx}
            options={options}
            onChange={(e) => handleChange(e, idx)}
            value={item}
            name={name}
            placeholder={placeholder}
            hasMargin
          />
        );
      })}
      <Box width="100%" flexDirection="row" alignItems="center">
        <AddAnother onClick={handleAddAnother}>Add another</AddAnother>
        <Box margin="0 -54px">
          <AddIcon style={{ color: colors.primaryPurple, fontSize: 40 }} />
        </Box>
      </Box>
    </>
  );
};

export default Topics;
