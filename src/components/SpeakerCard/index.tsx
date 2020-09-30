import React, { FC, lazy } from "react";
import {
  SpeakerName,
  SpeakerDesc,
  Wrapper,
  SpeakerInfo,
  ImageWrapper,
  ImageOverlay,
} from "./styles";
import { Link } from "react-router-dom";
import LazyWrapper from "components/LazyWrapper";

const StyledImage = lazy(() => import("components/StyledImage"));

interface IProps {
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const SpeakerCard: FC<IProps> = ({ name, imageUrl, slug, description }) => {
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
