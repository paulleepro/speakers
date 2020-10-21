import React, { FC, useState } from "react";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { IType } from "types";

import useMatchPath from "hooks/useMatchRoute";
import { Button } from "styles/components";
import { Wrapper, LinkText, FavoritesListLink } from "./styles";

import AuthModal from "../AuthModal";

interface IProps {
  types?: IType[];
}

const BigHeader: FC<IProps> = ({ types }) => {
  const match = useMatchPath({
    path: "/talent/:slug/booking-new",
  });

  const [open, setOpen] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState<boolean>(false);

  const handleClickOpen = (modalType: string) => {
    setIsSignUpModal(modalType === "signup");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <FavoritesListLink to="/favorites">
              <img src="/images/star.png" alt="star" width="24" height="23" />
              <LinkText noMargin>Favorites List</LinkText>
            </FavoritesListLink>
            <Button
              onClick={() => handleClickOpen("signin")}
              backgroundColor="transparent"
              padding="11px 0"
              margin="0 0 0 30px"
            >
              Sign In
            </Button>
            <Button
              onClick={() => handleClickOpen("signup")}
              margin="0 0 0 30px"
              padding="11px 48px"
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Wrapper>
      <AuthModal isSignUp={isSignUpModal} show={open} onClose={handleClose} />
    </>
  );
};

export default BigHeader;
