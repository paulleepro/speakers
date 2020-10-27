import React, { FC, lazy } from "react";
import { Visible } from "components/Grid";
import { fetchSingle } from "fetch-hooks-react";
import { IListResult, ITalent } from "../../types";
import { config } from "../../config";
import Loader from "../../components/Loader";

const HeaderTags = lazy(() => import("components/HeaderTags"));
const Title = lazy(() => import("./components/Title"));
const NoFavoritesList = lazy(() => import("./components/NoFavoritesList"));
const FavoritesList = lazy(() => import("./components/FavoritesList"));
const ErrorNotice = lazy(() => import("components/ErrorNotice"));
const TopLeftGradient = lazy(() => import("components/TopLeftGradient"));

const Favorites: FC = () => {
  const { data, error, isLoading } = fetchSingle<IListResult<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents?fields=name,id,slug,titles,media&where=slug:in:kevin-hart:alex-rodriguez:christian-siriano:ashley-judd:sully-sullenberger`
  );

  let components = null;
  if (isLoading) {
    components = <Loader />;
  } else if (error || !data) {
    components = <ErrorNotice />;
  } else if (data.data.length > 0) {
    components = <FavoritesList favorites={data.data} />;
  } else {
    components = <NoFavoritesList />;
  }

  return (
    <div>
      <HeaderTags title="Favorites List" description="" />
      <Title />
      <Visible md lg>
        <TopLeftGradient borderRadius="600px" width="60%" height="800px" />
      </Visible>
      {components}
    </div>
  );
};

export default Favorites;
