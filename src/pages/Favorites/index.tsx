import React, { FC, lazy } from "react";

const HeaderTags = lazy(() => import("components/HeaderTags"));
const Title = lazy(() => import("./Title"));
const NoFavoritesList = lazy(() => import("./NoFavoritesList"));

interface IProps {
  favoritesList: any[]; // TODO define favorite type
}

const Favorites: FC<IProps> = ({ favoritesList }) => {
  return (
    <div>
      <HeaderTags title="Favorites List" description="" />
      <Title />
      <NoFavoritesList />
    </div>
  );
};

export default Favorites;
