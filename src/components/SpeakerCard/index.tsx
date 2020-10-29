import React, { FC } from "react";
import {
  SpeakerName,
  SpeakerDesc,
  Wrapper,
  SpeakerInfo,
  ImageWrapper,
  ImageOverlay,
  StarWrapper,
} from "./styles";
import { Link } from "react-router-dom";
import LazyWrapper from "components/LazyWrapper";
import { ReactComponent as StarFilled } from "assets/icons/star-filled.svg";
import { ReactComponent as StarOutline } from "assets/icons/star-outline.svg";
import AddToFavoritesButton from "../AddToFavoritesButton";
import StyledImage from "../StyledImage";

interface IProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const FilledStar = ({ onClick }: any) => (
  <StarWrapper onClick={onClick}>
    <StarFilled />
  </StarWrapper>
);
const EmptyStar = ({ onClick }: any) => (
  <StarWrapper onClick={onClick}>
    <StarOutline />
  </StarWrapper>
);

const SpeakerCard: FC<IProps> = ({ id, name, imageUrl, slug, description }) => {
  return (
    <Link to={`/talent/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <LazyWrapper>
            <StyledImage
              fallbackSrc="/images/default-profile.svg"
              height={336}
              borderRadius="20px 20px 0 0"
              src={imageUrl}
              alt="speaker-card"
            />
          </LazyWrapper>
          <ImageOverlay src="/images/overlay.png" alt="overlay" />
          <AddToFavoritesButton
            talentId={id}
            hasFavoritedComponent={FilledStar}
            notFavoritedComponent={EmptyStar}
          />
        </ImageWrapper>
        <SpeakerInfo>
          <SpeakerName>{name}</SpeakerName>
          <SpeakerDesc>{description}</SpeakerDesc>
        </SpeakerInfo>
      </Wrapper>
    </Link>
  );
};

export default SpeakerCard;
