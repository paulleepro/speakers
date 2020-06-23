import React, { FC } from "react";
import { HeaderText, SeeAllText } from "styles/components";
import { Row, Col, Visible } from "react-grid-system";
import SpeakerCard from "components/SpeakerCard";
import SwipeableCards from "components/SwipeableCards";
import { ITalent } from "types";
import { config } from "config";
import { Link } from "react-router-dom";
import { HeaderWrapper } from "./styles";

interface IProps {
  categoryName: string;
  data: ITalent[];
  url?: string;
}

const CategoryPreview: FC<IProps> = ({ categoryName, data, url }) => {
  return (
    <>
      <Row>
        <Col offset={{ lg: 1 }} lg={10}>
          <HeaderWrapper
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
            width="100%"
          >
            <HeaderText noCenterAlign margin="25px 0 0 0">
              {categoryName}
            </HeaderText>
            {url ? (
              <Link to={url}>
                <SeeAllText>See All</SeeAllText>
              </Link>
            ) : null}
          </HeaderWrapper>
        </Col>
      </Row>
      <Row>
        <Visible md lg sm>
          {data.slice(0, 4).map((x, i) => (
            <Col
              offset={{ lg: i === 0 ? 1 : 0 }}
              xs={3}
              lg={2.5}
              key={`speaker-${categoryName.replace(/ /g, "-")}-${i}`}
            >
              <SpeakerCard
                slug={x.slug}
                imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
                name={x.name}
                description={x.titles[0]}
              />
            </Col>
          ))}
        </Visible>
        <Visible xs>
          <Col>
            <SwipeableCards talentList={data} />
          </Col>
        </Visible>
      </Row>
    </>
  );
};

export default CategoryPreview;
