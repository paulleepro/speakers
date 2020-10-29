import React, { FC, useState } from "react";
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
  const [topicItems, setTopicItems] = useState(
    activeItems.length > 0 ? [...activeItems] : [""]
  );

  const handleAddAnother = () => {
    setTopicItems([...topicItems, ""]);
  };

  const handleChange = (e: any, idx: number): void => {
    const newTopicItems = topicItems.map((item, i) =>
      idx === i ? e.target.value : item
    );
    setTopicItems(newTopicItems);
    onChange(newTopicItems);
  };

  const options = list.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  return (
    <>
      {topicItems.map((item, idx) => {
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
