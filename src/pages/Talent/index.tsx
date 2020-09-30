import React, { FC, lazy } from "react";
import { useParams } from "react-router";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import { ITalent } from "types";
import { Visible } from "components/Grid";
import { config } from "config";
import { TopAreaDivider } from "styles/components";
import LazyWrapper from "components/LazyWrapper";

const HeaderTags = lazy(() => import("components/HeaderTags"));
const ErrorNotice = lazy(() => import("components/ErrorNotice"));
const Bio = lazy(() => import("./Bio"));
const BookTalent = lazy(() => import("./BookTalent"));
const MediumHeader = lazy(() => import("./MediumHeader"));
const MoreAboutTalent = lazy(() => import("./MoreAboutTalent"));
const MoreLike = lazy(() => import("./MoreLike"));
const SmallHeader = lazy(() => import("./SmallHeader"));

const Talent: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, isLoading } = fetchSingle<ITalent>(
    `${config.speakersTalentUrl}/v1/talents/slug/${slug}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  return (
    <LazyWrapper>
      <HeaderTags
        title={data.name}
        description={
          data.bio_highlights
            .replace(/&nbsp;/gi, "")
            .replace(/(<([^>]+)>)/gi, "")
            .trim()
            .slice(0, 157) + "..."
        }
      />
      <div>
        <Visible xs sm>
          <SmallHeader talent={data} />
        </Visible>
        <Visible md lg>
          <MediumHeader talent={data} />
        </Visible>
        <MoreAboutTalent name={data.name} reviews={data.reviews} />
        <TopAreaDivider />
        <Bio highlights={data.bio_highlights} details={data.bio_details} />
        <BookTalent name={data.name} slug={data.slug} />
        <MoreLike name={data.name} types={data.types.map((x) => x.name)} />
      </div>
    </LazyWrapper>
  );
};

export default Talent;
