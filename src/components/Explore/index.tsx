import React, { FC } from "react";
import { MainWrapper } from "./styles";
import StarPower from "components/StarPower";
import Title from "./Title";
import Featured from "./Featured";
import CategoryPreview from "./CategoryPreview";
import Search from "./Search";

const topics = [
  "Innovators & Entrepreneurs",
  "Basketball Players & Coaches",
  "Social Media Influencers",
  "Artists & Entertainers",
];

const Explore: FC = () => {
  return (
    <MainWrapper>
      <Title tabs={topics} />
      <Search />
      <Featured />
      {topics.map((x, i) => (
        <div id={x.replace(/ /g, "-").toLowerCase()} key={`category-${i}`}>
          <CategoryPreview categoryName={x} />
        </div>
      ))}
      <StarPower />
    </MainWrapper>
  );
};

export default Explore;
