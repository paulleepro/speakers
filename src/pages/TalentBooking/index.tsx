import React, { FC, lazy } from "react";
import { useParams } from "react-router";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import { ITalent } from "types";
import { Visible } from "components/Grid";
import { config } from "config";
import LazyWrapper from "components/LazyWrapper";

const ErrorNotice = lazy(() => import("components/ErrorNotice"));
const MediumHeader = lazy(() => import("./MediumHeader"));
const SmallHeader = lazy(() => import("./SmallHeader"));
const HeaderTags = lazy(() => import("components/HeaderTags"));

const TalentBooking: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, isLoading } = fetchSingle<ITalent>(
    `${config.speakersTalentUrl}/v1/talents/slug/${slug}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return (
      <LazyWrapper>
        <ErrorNotice />
      </LazyWrapper>
    );
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
      </div>
    </LazyWrapper>
  );
};

export default TalentBooking;
