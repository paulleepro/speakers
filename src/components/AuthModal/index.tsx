import React, { FC, useState, useEffect } from "react";
import {
  ModalHeader,
  ModalContent,
  ModalFooter,
  FormTitle,
  FooterButton,
  ModalHeaderWrapper,
} from "./styles";
import Modal from "../Modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

interface IProps {
  isSignUp?: boolean;
  show: boolean;
  onClose: () => void;
  title?: string;
}

const AuthModal: FC<IProps> = ({
  isSignUp = false,
  show,
  onClose,
  title = "",
}) => {
  const [isSignUpModal, setIsSignUpModal] = useState<boolean>(false);

  useEffect(() => {
    setIsSignUpModal(isSignUp);
  }, [isSignUp]);

  const toggleModal = () => {
    setIsSignUpModal((prev) => !prev);
  };

  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeaderWrapper>
        <ModalHeader>{title}</ModalHeader>
      </ModalHeaderWrapper>

      <ModalContent>
        <FormTitle>
          <h4>Sign {isSignUpModal ? "Up" : "In"}</h4>
          <p>Sign {isSignUpModal ? "up" : "in"} and save your favorites.</p>
        </FormTitle>

        {isSignUpModal ? (
          <SignUpForm onClose={onClose} />
        ) : (
          <SignInForm onClose={onClose} />
        )}
      </ModalContent>

      <ModalFooter>
        <span>
          {isSignUpModal ? "Have an account?" : "Don’t have an account?"}
        </span>{" "}
        <FooterButton onClick={toggleModal}>
          Sign {isSignUpModal ? "in" : "up"}.
        </FooterButton>
      </ModalFooter>
    </Modal>
  );
};

export default AuthModal;
