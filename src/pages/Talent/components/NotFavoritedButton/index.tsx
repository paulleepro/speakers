import { FavoriteButton } from "../../styles";
import React, { FC } from "react";
import { ReactComponent as StarOutline } from "assets/Icons/star-outline.svg";

interface IProps {
  onClick: () => any;
}

const NotFavoritedButton: FC<IProps> = ({ onClick }) => (
  <FavoriteButton onClick={onClick}>
    <StarOutline />
    Add to Favorites List
  </FavoriteButton>
);

export default NotFavoritedButton;
