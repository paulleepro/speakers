import React, { FC } from "react";

import { Backdrop, PositionedModal, CloseButton } from "./styles";

interface IProps {
  show: boolean;
  onClose?: () => void;
}

const Modal: FC<IProps> = ({ show, onClose, children }) => {
  const renderBackdrop = (props: any) => <Backdrop {...props} />;

  return (
    <PositionedModal
      show={show}
      onHide={onClose}
      renderBackdrop={renderBackdrop}
      aria-labelledby="modal-label"
    >
      <div>
        <CloseButton onClick={onClose}>
          <img src="/images/close.png" width="24" alt="close" />
        </CloseButton>
        {children}
      </div>
    </PositionedModal>
  );
};

export default Modal;
