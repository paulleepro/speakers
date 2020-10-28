import { FavoriteButton } from "../../styles";
import { ReactComponent as StarFilled } from "assets/Icons/star-filled.svg";
import React, { FC } from "react";

interface IProps {
  onClick: () => any;
}

const HasFavoritedButton: FC<IProps> = ({ onClick }) => (
  <FavoriteButton onClick={onClick} hasFavorited>
    <StarFilled />
    Remove from Favorites List
  </FavoriteButton>
);

export default HasFavoritedButton;
