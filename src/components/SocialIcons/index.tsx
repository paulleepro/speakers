import React, { FC } from "react";
import { Box } from "react-basic-blocks";

const getIcon = (url: string) => {
  if (/instagram/.test(url)) {
    return "/images/instagram.png";
  } else {
    return "/images/twitter.png";
  }
};

interface IProps {
  urls: string[];
  margin?: string;
  justifyContent?: string;
}

const SocialIcons: FC<IProps> = ({
  urls,
  margin = "20px 0",
  justifyContent = "flex-start",
}) => {
  return (
    <Box flexDirection="row" margin={margin} justifyContent={justifyContent}>
      {urls.map((x, i) => (
        <Box margin="0 10px" key={`social-icon-${i}`}>
          <a href={x} target="_insta">
            <img src={getIcon(x)} width="32" alt="instagram" />
          </a>
        </Box>
      ))}
    </Box>
  );
};

export default SocialIcons;
