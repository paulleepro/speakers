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
  type: IType;
}

const Type: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, isLoading } = fetchMany<IFetchMany>([
    {
      key: "type",
      url: `${config.speakersTalentUrl}/v1/talents/metadata/types/slug/${slug}`,
    },
    {
      key: "featured",
      url: `${config.speakersTalentUrl}/v1/talents?limit=6&where=types.slug:exact:${slug}&where=is_new:exact:false`,
    },
    {
      key: "new",
      url: `${config.speakersTalentUrl}/v1/talents?limit=8&where=types.slug:exact:${slug}&where=is_new:exact:true`,
    },
    {
      key: "all",
      url: `${config.speakersTalentUrl}/v1/talents?limit=20&where=types.slug:exact:${slug}`,
    },
  ]);

  const { data: allData } = fetchSingle<IListResult<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents?where=types.slug:exact:${slug}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  const all = allData ? allData.data : data.all.data;

  return (
    <CategoryPage
      name={data.type.name}
      featuredTalent={data.all.data.slice(0, 8)}
      newTalent={data.new.data}
      allTalent={all}
      totalTalent={data.all.metadata.total}
    />
  );
};

export default Type;
