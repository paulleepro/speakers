import React, { FC } from "react";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import { config } from "config";
import ErrorNotice from "components/ErrorNotice";
import StarPower from "components/StarPower";
import Title from "./Title";
import CategoryPreview from "./CategoryPreview";
import Featured from "components/Featured";
import { IListResult, ITalent } from "types";
import { hardCodedTalent } from "hard-coded-talent";
import { Container } from "react-grid-system";

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
        <Featured data={getTalent(data.data, hardCodedTalent[0].talent)} />
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
        <StarPower />
      </>
    );
  }

  return (
    <Container fluid>
      <Title tabs={hardCodedTalent.map((x) => x.name)} />
      {components}
    </Container>
  );
};

export default Explore;
