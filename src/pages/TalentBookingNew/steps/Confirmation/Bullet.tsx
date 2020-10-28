import React, { FC } from "react";
import { QuestionBullet } from "../../common/QuestionHeader/styles";
import {
  BulletWrapper,
  BulletTitle,
  BulletDescription,
  BulletContent,
} from "./styles";

interface IProps {
  order: number;
  title: string;
  description: any;
  isLast?: boolean;
}

const Bullet: FC<IProps> = ({ order, title, description, isLast }) => {
  return (
    <BulletWrapper flexDirection="row" isLast={isLast}>
      <QuestionBullet>{order}</QuestionBullet>
      <BulletContent>
        <BulletTitle>{title}</BulletTitle>
        <BulletDescription>{description}</BulletDescription>
      </BulletContent>
    </BulletWrapper>
  );
};

export default Bullet;
