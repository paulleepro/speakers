import React, { FC } from "react";
import CategoryPreview from "./CategoryPreview";
import { IListResult, ITalent } from "types";

interface IProps {
  data: { [key: string]: IListResult<ITalent> };
}

const Topics: FC<IProps> = ({ data }) => {
  return (
    <>
      {Object.entries(data)
        .filter(([name]) => name !== "featured")
        .map(([name, talentData], i) => (
          <div id={name.replace(/ /g, "-").toLowerCase()} key={`category-${i}`}>
            <CategoryPreview categoryName={name} data={talentData} />
          </div>
        ))}
    </>
  );
};

export default Topics;
