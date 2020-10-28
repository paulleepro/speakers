import React, { FC, useState } from "react";
import SaveFavoritesListModal from "../SaveFavoritesListModal";
import AuthModal from "../AuthModal";
import { useAuth } from "context/AuthContext";
import {
  useFavoritesLists,
  useUpdateFavoritesList,
} from "../../hooks/api/booking";
import { useError } from "../../context/ErrorContext";

interface IProps {
  talentId: string;
  hasFavoritedComponent: any;
  notFavoritedComponent: any;
}

const AddToFavoritesButton: FC<IProps> = ({
  talentId,
  hasFavoritedComponent: HasFavoritedComponent,
  notFavoritedComponent: NotFavoritedComponent,
}) => {
  const { addError } = useError();
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const {
    data: favoritesLists,
    isLoading: areFavoritesListsLoading,
  } = useFavoritesLists();
  const [
    doUpdateList,
    { isLoading: isListUpdating },
  ] = useUpdateFavoritesList();
  const list = favoritesLists?.data[0];
  const hasFavorited = list && list.talent_ids?.includes(talentId);

  const onClick = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (isListUpdating) {
      return;
    }
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else if (list) {
      const updatedIds = hasFavorited
        ? list.talent_ids.filter((id: string) => id !== talentId)
        : [...list.talent_ids, talentId];
      await doUpdateList(
        { id: list.id, data: { ...list, talent_ids: updatedIds } },
        {
          onError: () =>
            addError("We encountered a problem updating your favorites."),
        }
      );
    } else {
      setShowSaveModal(true);
    }
  };

  if (areFavoritesListsLoading) {
    return null;
  }

  return (
    <div onClick={(evt) => evt.stopPropagation()}>
      {hasFavorited ? (
        <HasFavoritedComponent onClick={onClick} />
      ) : (
        <NotFavoritedComponent onClick={onClick} />
      )}
      <SaveFavoritesListModal
        talentIds={[talentId]}
        show={showSaveModal}
        onClose={() => setShowSaveModal(false)}
      />
      <AuthModal
        show={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        title="Add to Favorites List"
        subtitleEnding="save your favorites"
        isSignUp
      />
    </div>
  );
};

export default AddToFavoritesButton;
