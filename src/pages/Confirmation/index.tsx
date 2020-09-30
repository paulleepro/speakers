import React, { FC, lazy } from "react";
import { useParams } from "react-router";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import { config } from "config";
import { ITalent } from "types";
import LazyWrapper from "components/LazyWrapper";

const ErrorNotice = lazy(() => import("components/ErrorNotice"));
const Title = lazy(() => import("./Title"));
const StarPower = lazy(() => import("components/StarPower"));
const WhatHappensNext = lazy(() => import("./WhatHappensNext"));

const Confirmation: FC = () => {
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
    <div>
      <LazyWrapper>
        <Title name={data.name} slug={slug} />
        <WhatHappensNext name={data.name} />
        <StarPower />
      </LazyWrapper>
    </div>
  );
};

export default Confirmation;
