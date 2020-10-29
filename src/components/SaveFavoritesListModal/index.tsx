import React, { FC, useState } from "react";

import Modal from "components/Modal";
import { Button } from "styles/components";
import {
  ModalHeader,
  ModalContent,
  ModalFooter,
  Input,
  Label,
  LabelDescription,
} from "./styles";
import { useCreateFavoritesList } from "../../hooks/api/booking";
import { useHistory } from "react-router";
import { useError } from "../../context/ErrorContext";

interface IProps {
  show: boolean;
  onClose: () => void;
  talentIds: string[];
}

const SaveFavoritesListModal: FC<IProps> = ({ show, onClose, talentIds }) => {
  const { addError } = useError();
  const [doCreateList, { isLoading: isCreating }] = useCreateFavoritesList();
  const [name, setName] = useState("");
  const history = useHistory();

  const createList = async () => {
    if (isCreating || !name) {
      return;
    }
    await doCreateList(
      { name, talentIds },
      {
        onSuccess: () => history.push("/favorites"),
        onError: () =>
          addError("We encountered a problem saving your favorites list."),
      }
    );
  };

  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeader>Save to Favorites List</ModalHeader>
      <ModalContent>
        <Label>Name Your Favorites List</Label>
        <LabelDescription>Create a title for your list below.</LabelDescription>
        <Input
          type="text"
          placeholder="My favorites list…"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </ModalContent>
      <ModalFooter>
        <Button padding="14px 81px" onClick={createList}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default SaveFavoritesListModal;
