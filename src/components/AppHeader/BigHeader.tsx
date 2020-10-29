import React, { FC, useState } from "react";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { IType } from "types";

import useMatchPath from "hooks/useMatchRoute";
import { Button } from "styles/components";
import {
  Wrapper,
  LinkText,
  FavoritesListButton,
  VerticalDivider,
} from "./styles";

import AuthModal from "../AuthModal";
import { useAuth } from "context/AuthContext";
import UserDropdown from "./UserDropdown";

interface IProps {
  types?: IType[];
}

const initialAuthModalState = {
  isOpen: false,
  isSignUpModal: true,
  title: "",
  subtitleEnding: "",
};

const BigHeader: FC<IProps> = ({ types }) => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();
  const match = useMatchPath({
    path: "/talent/:slug/booking-new",
  });

  const [authModalState, setAuthModalState] = useState(initialAuthModalState);

  const openDefaultAuthModal = (modalType: string) => {
    setAuthModalState({
      ...authModalState,
      isOpen: true,
      isSignUpModal: modalType === "signup",
    });
  };

  const onFavoritesListClick = () => {
    if (isAuthenticated) {
      history.push("/favorites");
    } else {
      setAuthModalState({
        isOpen: true,
        isSignUpModal: true,
        title: "Create your Favorites List",
        subtitleEnding: "save your favorites",
      });
    }
  };

  const closeAuthModal = () =>
    setAuthModalState({ ...initialAuthModalState, isOpen: false });

  return (
    <>
      <Wrapper backgroundColor="rgba(0,0,0,0.2)" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center">
          <Link to="/">
            <img src="/logo.png" height="17" width="184" alt="logo" />
          </Link>
        </Box>

        {!match?.isExact && (
          <Box flexDirection="row" alignItems="center">
            <Link to="/how-it-works">
              <LinkText>How it Works</LinkText>
            </Link>
            <Link to="/explore">
              <LinkText>Explore</LinkText>
            </Link>
            <VerticalDivider />
            <FavoritesListButton onClick={onFavoritesListClick}>
              <img src="/images/star.png" alt="star" width="24" height="23" />
              Favorites List
            </FavoritesListButton>
            <VerticalDivider />
            {!isAuthenticated && (
              <>
                <Button
                  onClick={() => openDefaultAuthModal("signin")}
                  backgroundColor="transparent"
                  padding="11px 0"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => openDefaultAuthModal("signup")}
                  margin="0 0 0 30px"
                  padding="11px 48px"
                >
                  Sign Up
                </Button>
              </>
            )}
            {isAuthenticated && <UserDropdown />}
          </Box>
        )}
      </Wrapper>
      <AuthModal
        isSignUp={authModalState.isSignUpModal}
        show={authModalState.isOpen}
        onClose={closeAuthModal}
        title={authModalState.title}
        subtitleEnding={authModalState.subtitleEnding}
      />
    </>
  );
};

export default BigHeader;
