import React, { FC } from "react";
import { Visible } from "components/Grid";
import Loader from "../../components/Loader";
import { useFavoritesLists } from "../../hooks/api/booking";
import HeaderTags from "../../components/HeaderTags";
import FavoritesList from "./components/FavoritesList";
import NoFavoritesList from "./components/NoFavoritesList";
import TopLeftGradient from "../../components/TopLeftGradient";
import ErrorNotice from "../../components/ErrorNotice";
import Title from "./components/Title";

const Favorites: FC = () => {
  const { data: favoritesLists, isLoading, error }: any = useFavoritesLists();

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <ErrorNotice />;
  } else if (favoritesLists?.data.length > 0) {
    content = <FavoritesList favorites={favoritesLists.data[0]} />;
  } else {
    content = <NoFavoritesList />;
  }

  return (
    <div>
      <HeaderTags title="Favorites List" description="" />
      <Title />
      <Visible md lg>
        <TopLeftGradient borderRadius="600px" width="60%" height="800px" />
      </Visible>
      {content}
    </div>
  );
};

export default Favorites;
