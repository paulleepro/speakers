import React, { FC } from "react";
import { useParams } from "react-router";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import MediumHeader from "./MediumHeader";
import { ITalent } from "types";
import { Visible } from "components/Grid";
import SmallHeader from "./SmallHeader";
import { config } from "config";

const TalentBooking: FC = () => {
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
      <Visible xs sm>
        <SmallHeader talent={data} />
      </Visible>
      <Visible md lg>
        <MediumHeader talent={data} />
      </Visible>
    </div>
  );
};

export default TalentBooking;
