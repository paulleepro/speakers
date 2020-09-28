import React, { FC, lazy } from "react";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import { config } from "config";
import CategoryPreview from "./CategoryPreview";
import { IListResult, ITalent } from "types";
import { hardCodedTalent } from "hard-coded-talent";
import { StyledContainer } from "styles/components";
import { Visible } from "components/Grid";

const ErrorNotice = lazy(() => import("components/ErrorNotice"));
const Featured = lazy(() => import("components/Featured"));
const HeaderTags = lazy(() => import("components/HeaderTags"));
const StarPower = lazy(() => import("components/StarPower"));
const Title = lazy(() => import("./Title"));
const TopLeftGradient = lazy(() => import("components/TopLeftGradient"));

const getTalent = (data: ITalent[], slugs: string[]) =>
  data.filter((x) => slugs.includes(x.slug));

const Explore: FC = () => {
  const slugs = hardCodedTalent
    .reduce((prev, curr) => [...prev, ...curr.talent], [] as string[])
    .join(":");

  const { data, error, isLoading } = fetchSingle<IListResult<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents?fields=name,id,slug,titles,media&where=slug:in:${slugs}`
  );

  let components = <div />;

  if (isLoading) {
    components = <Loader />;
  } else if (error || !data) {
    components = <ErrorNotice />;
  } else {
    components = (
      <>
        <Featured
          data={getTalent(data.data, hardCodedTalent[0].talent)}
          mdCardsPerRow={4}
        />
        {hardCodedTalent.slice(1).map((x, i) => (
          <div
            id={x.name.replace(/ /g, "-").toLowerCase()}
            key={`category-${i}`}
          >
            <CategoryPreview
              categoryName={x.name}
              data={getTalent(data.data, x.talent)}
              url={x.url}
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <HeaderTags
        title="Explore"
        description="Choose from our many high-profile speakers. Our high-profile speakers are available digitally for your next corporate town hall, board meeting, or retreat."
      />
      <Title tabs={hardCodedTalent.map((x) => x.name)} />
      <Visible md lg>
        <TopLeftGradient height="800px" width="60%" borderRadius="600px" />
      </Visible>
      <StyledContainer fluid>{components}</StyledContainer>
      <StarPower />
    </>
  );
};

export default Explore;
