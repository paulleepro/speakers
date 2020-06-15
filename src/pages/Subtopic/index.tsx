import React, { FC } from "react";
import { useParams } from "react-router";
import { fetchMany, fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import { ITalent, IListResult, IType } from "types";
import { config } from "config";
import CategoryPage from "components/CategoryPage";

interface IFetchMany {
  featured: IListResult<ITalent>;
  new: IListResult<ITalent>;
  all: IListResult<ITalent>;
  subtopic: IType;
}

const Subtopic: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = fetchMany<IFetchMany>([
    {
      key: "subtopic",
      url: `${config.speakersTalentUrl}/v1/talents/metadata/subtopics/${id}`,
    },
    {
      key: "featured",
      url: `${config.speakersTalentUrl}/v1/talents?limit=6&where=subtopics.id:exact:${id}&where=is_new:exact:false`,
    },
    {
      key: "new",
      url: `${config.speakersTalentUrl}/v1/talents?limit=8&where=subtopics.id:exact:${id}&where=is_new:exact:true`,
    },
    {
      key: "all",
      url: `${config.speakersTalentUrl}/v1/talents?limit=20&where=subtopics.id:exact:${id}`,
    },
  ]);

  const { data: allData } = fetchSingle<IListResult<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents?where=subtopics.id:exact:${id}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  const all = allData ? allData.data : data.all.data;

  return (
    <CategoryPage
      name={data.subtopic.name}
      featuredTalent={data.all.data.slice(0, 6)}
      newTalent={data.new.data}
      allTalent={all}
    />
  );
};

export default Subtopic;
