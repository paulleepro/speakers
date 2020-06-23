import React, { FC } from "react";
import {
  HeaderText,
  DescriptionText,
  StyledContainer,
} from "styles/components";
import { Box } from "react-basic-blocks";
import { Row, Col, useScreenClass } from "react-grid-system";
import colors from "styles/colors";
import { ActionIcon, ActionWrapper, PanelWrapper, TextWrapper } from "./styles";
import StyledImage from "components/StyledImage";
import Circles from "components/Circles";

interface PIProps {
  imageRight?: boolean;
  imageUrl: string;
  iconUrl?: string;
  showCircles?: boolean;
}

const PanelImage: FC<PIProps> = ({
  iconUrl,
  imageUrl,
  imageRight,
  showCircles,
}) => (
  <Col
    offset={{ lg: 1, md: imageRight ? 1 : 0, sm: 2, xs: 1 }}
    xs={10}
    sm={8}
    md={5}
    lg={5}
  >
    {showCircles ? <Circles color={colors.purpleLiner} top="0" /> : false}
    <ActionWrapper>
      <StyledImage
        height={376}
        src={imageUrl}
        alt="panel-img"
        borderRadius="20px"
      />
      {iconUrl && (
        <ActionIcon imageRight={imageRight}>
          <img src={iconUrl} height="40" width="40" alt="swipe" />
        </ActionIcon>
      )}
    </ActionWrapper>
  </Col>
);

interface IProps {
  imageRight?: boolean;
  title: string;
  description: string;
  imageUrl: string;
  iconUrl?: string;
  showCircles?: boolean;
}

const Panel: FC<IProps> = ({
  imageRight,
  title,
  description,
  imageUrl,
  iconUrl,
  showCircles,
}) => {
  const screenClass = useScreenClass();
  const isSmall = ["xs", "sm"].includes(screenClass);
  return (
    <PanelWrapper>
      <StyledContainer fluid>
        <Row>
          {imageRight && !isSmall ? null : (
            <PanelImage
              imageUrl={imageUrl}
              imageRight={imageRight}
              iconUrl={iconUrl}
              showCircles={showCircles}
            />
          )}
          <Col offset={{ md: imageRight ? 0 : 1, lg: 1 }} xs={12} md={6} lg={4}>
            <Box
              justifyContent="center"
              height="100%"
              alignItems={isSmall ? "center" : "flex-start"}
              margin={isSmall ? "40px 0 40px 0" : "0"}
            >
              <TextWrapper>
                <HeaderText>{title}</HeaderText>
                <DescriptionText
                  color={colors.midGrey}
                  textAlign={isSmall ? "center" : "left"}
                >
                  {description}
                </DescriptionText>
              </TextWrapper>
            </Box>
          </Col>
          {imageRight && !isSmall ? (
            <PanelImage
              imageUrl={imageUrl}
              imageRight={imageRight}
              iconUrl={iconUrl}
            />
          ) : null}
        </Row>
      </StyledContainer>
    </PanelWrapper>
  );
};

export default Panel;
