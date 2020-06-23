import React, { FC } from "react";
import { useParams } from "react-router";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import Title from "./Title";
import StarPower from "components/StarPower";
import { config } from "config";
import { ITalent } from "types";
import WhatHappensNext from "./WhatHappensNext";

const Confirmation: FC = () => {
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
    <div>
      <Title name={data.name} slug={slug} />
      <WhatHappensNext name={data.name} />
      <StarPower />
    </div>
  );
};

export default Confirmation;
