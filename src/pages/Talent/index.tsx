import React, { FC } from "react";
import { useParams } from "react-router";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import MediumHeader from "./MediumHeader";
import { ITalent } from "types";
import Bio from "./Bio";
import MoreAboutTalent from "./MoreAboutTalent";
import BookTalent from "./BookTalent";
import MoreLike from "./MoreLike";
import { Visible } from "react-grid-system";
import SmallHeader from "./SmallHeader";
import { config } from "config";

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
    <div>
      <Visible xs sm>
        <SmallHeader talent={data} />
      </Visible>
      <Visible md lg>
        <MediumHeader talent={data} />
      </Visible>
      <Bio highlights={data.bio_highlights} details={data.bio_details} />
      <MoreAboutTalent name={data.name} reviews={data.reviews} />
      <BookTalent name={data.name} slug={data.slug} />
      <MoreLike name={data.name} types={data.types.map((x) => x.name)} />
    </div>
  );
};

export default Talent;
