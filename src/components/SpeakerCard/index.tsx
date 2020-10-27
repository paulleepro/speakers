import React, { FC, lazy } from "react";
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

const StyledImage = lazy(() => import("components/StyledImage"));

interface IProps {
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
  hasFavorited?: boolean;
}

const SpeakerCard: FC<IProps> = ({
  name,
  imageUrl,
  slug,
  description,
  hasFavorited,
}) => {
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
          <StarWrapper>
            {hasFavorited ? <StarFilled /> : <StarOutline />}
          </StarWrapper>
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
