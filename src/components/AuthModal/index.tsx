import React, { FC, useState, useEffect } from "react";
import {
  ModalHeader,
  ModalContent,
  ModalFooter,
  FormTitle,
  FooterButton,
} from "./styles";
import Modal from "../Modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

interface IProps {
  isSignUp?: boolean;
  show: boolean;
  onClose: () => void;
}

const AuthModal: FC<IProps> = ({ isSignUp = false, show, onClose }) => {
  const [isSignUpModal, setIsSignUpModal] = useState<boolean>(false);

  useEffect(() => {
    setIsSignUpModal(isSignUp);
  }, [isSignUp]);

  const toggleModal = () => {
    setIsSignUpModal((prev) => !prev);
  };

  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeader>Add to Favorites List</ModalHeader>

      <ModalContent>
        <FormTitle>
          <h4>Sign {isSignUpModal ? "Up" : "In"}</h4>
          <p>Sign {isSignUpModal ? "up" : "in"} and save your favorites.</p>
        </FormTitle>

        {isSignUpModal ? <SignUpForm /> : <SignInForm />}
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
