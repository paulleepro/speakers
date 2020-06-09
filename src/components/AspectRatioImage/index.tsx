import React, { FC } from "react";
import { ItemImage } from "./styles";

const AspectRatioImage: FC<{
  width: number;
  aspectRatio: number;
  borderRadius?: string;
  imageUrl?: string;
}> = ({ width, imageUrl, aspectRatio, borderRadius = "0" }) => {
  const height = width / aspectRatio;
  return (
    <ItemImage
      imageUrl={imageUrl}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default AspectRatioImage;
