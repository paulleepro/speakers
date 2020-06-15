import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { SpeakerName, SpeakerDesc, Wrapper } from "./styles";
import colors from "styles/colors";
import { Link } from "react-router-dom";
import StyledImage from "components/StyledImage";

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
        <StyledImage
          fallbackSrc="/images/default-profile.svg"
          height={235}
          borderRadius="20px 20px 0 0"
          src={imageUrl}
          alt="speaker-card"
        />
        <Box
          borderRadius="0 0 20px 20px"
          borderTop={`4px solid ${colors.primaryPurple}`}
          backgroundColor="#221e29"
          padding="15px 30px"
        >
          <SpeakerName>{name}</SpeakerName>
          <SpeakerDesc>{description}</SpeakerDesc>
        </Box>
      </Wrapper>
    </Link>
  );
};

export default SpeakerCard;
