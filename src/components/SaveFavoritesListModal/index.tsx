import React, { FC } from "react";

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

interface IProps {
  show: boolean;
  onClose: () => void;
}

const SaveFavoritesListModal: FC<IProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeader>Save Favorites List</ModalHeader>
      <ModalContent>
        <Label>Name Your Favorites List</Label>
        <LabelDescription>Create a title for your list below.</LabelDescription>
        <Input type="text" placeholder="My favorites list…" />
      </ModalContent>
      <ModalFooter>
        <Button padding="14px 81px">Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default SaveFavoritesListModal;
