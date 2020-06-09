import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { SpeakerName, SpeakerDesc, Wrapper } from "./styles";
import colors from "styles/colors";
import { StyledImage } from "styles/components";
import { Link } from "react-router-dom";

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
        <StyledImage height="235" borderRadius="20px 20px 0 0" src={imageUrl} />
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
