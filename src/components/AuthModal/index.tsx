import React, { FC, useState, useEffect } from "react";
import {
  ModalHeader,
  ModalContent,
  ModalFooter,
  FormTitle,
  TextButton,
  ModalHeaderWrapper,
} from "./styles";
import Modal from "../Modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

interface IProps {
  isSignUp?: boolean;
  show: boolean;
  onClose: () => void;
  title?: string;
  subtitleEnding?: string;
}

const AuthModal: FC<IProps> = ({
  isSignUp = false,
  show,
  onClose,
  title = "",
  subtitleEnding = "",
}) => {
  const [isSignUpModal, setIsSignUpModal] = useState<boolean>(false);
  const [isForgotPasswordForm, setIsForgotPasswordForm] = useState<boolean>(
    false
  );

  useEffect(() => {
    setIsForgotPasswordForm(false);
  }, [show]);

  useEffect(() => {
    setIsSignUpModal(isSignUp);
  }, [isSignUp]);

  const toggleModal = () => {
    setIsForgotPasswordForm(false);
    setIsSignUpModal((prev) => !prev);
  };

  const handleClickForgotPassword = () => {
    setIsForgotPasswordForm(true);
  };

  const renderModalContent = () => {
    if (isForgotPasswordForm) {
      return (
        <ModalContent>
          <FormTitle>
            <h4>Forgot Your Password?</h4>
            <p>We'll send you instructions to get a new password.</p>
          </FormTitle>
          <ForgotPasswordForm onClose={onClose} />
        </ModalContent>
      );
    }

    return (
      <ModalContent>
        <FormTitle>
          <h4>Sign {isSignUpModal ? "Up" : "In"}</h4>
          {subtitleEnding && (
            <p>Sign {isSignUpModal ? "up" : "in"} and save your favorites.</p>
          )}
        </FormTitle>

        {isSignUpModal ? (
          <SignUpForm onClose={onClose} />
        ) : (
          <SignInForm
            onClose={onClose}
            onClickForgotPassword={handleClickForgotPassword}
          />
        )}
      </ModalContent>
    );
  };

  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeaderWrapper>
        <ModalHeader>{title}</ModalHeader>
      </ModalHeaderWrapper>

      {renderModalContent()}

      <ModalFooter>
        <span>
          {isSignUpModal ? "Have an account?" : "Don’t have an account?"}
        </span>{" "}
        <TextButton onClick={toggleModal}>
          Sign {isSignUpModal ? "in" : "up"}.
        </TextButton>
      </ModalFooter>
    </Modal>
  );
};

export default AuthModal;
