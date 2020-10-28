import React, { FC } from "react";
import { HeaderText, SeeAllText } from "styles/components";
import { Row, Col, Visible } from "components/Grid";
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
            <HeaderText noCenterAlign margin="25px 0 0 0" smallerOnMobile>
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
        {data.slice(0, 4).map((x, i) => (
          <Col
            offset={{ lg: i === 0 ? 1 : 0 }}
            xs={3}
            lg={25}
            key={`speaker-${categoryName.replace(/ /g, "-")}-${i}`}
          >
            <Visible md lg sm>
              <SpeakerCard
                id={x.id}
                slug={x.slug}
                imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
                name={x.name}
                description={x.titles[0]}
              />
            </Visible>
          </Col>
        ))}
        <Col>
          <Visible xs>
            <SwipeableCards talentList={data} />
          </Visible>
        </Col>
      </Row>
    </>
  );
};

export default CategoryPreview;
