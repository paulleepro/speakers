import React, { FC, useState } from "react";
import { Row, Col } from "react-grid-system";
import { config } from "config";
import SpeakerCard from "components/SpeakerCard";
import Featured from "components/Featured";
import { ITalent } from "types";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  BigText,
  ArrowLeftText,
  HeaderText,
  TopAreaDivider,
  SeeAllText,
  StyledContainer,
} from "styles/components";
import StarPower from "components/StarPower";

interface IProps {
  name: string;
  featuredTalent: ITalent[];
  newTalent: ITalent[];
  allTalent: ITalent[];
}

const CategoryPage: FC<IProps> = ({
  name,
  featuredTalent,
  newTalent,
  allTalent,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <Box padding="40px 0 0 0">
              <Link to="/explore">
                <ArrowLeftText>BACK TO EXPLORE</ArrowLeftText>
              </Link>
              <BigText>{name}</BigText>
            </Box>
          </Col>
        </Row>
        <TopAreaDivider />
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <HeaderText margin="0 0 12px 0">{`Featured ${name}`}</HeaderText>
          </Col>
        </Row>
        <Featured data={featuredTalent} />
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <HeaderText margin="80px 0 12px 0">{`New ${name}`}</HeaderText>
          </Col>
        </Row>
        <Featured data={newTalent} mdCardsPerRow={4} />
        <Row>
          <Col offset={{ lg: 1 }} xs={12} md={10} lg={7}>
            <Box margin="80px 0 0 0">
              <HeaderText>More {name}</HeaderText>
            </Box>
          </Col>
          <Col xs={12} md={2} lg={3}>
            <Box margin="80px 0 0 0" alignItems="flex-end" cursor="pointer">
              {!showAll && allTalent.length > 40 ? (
                <ScrollLink
                  to="more"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setShowAll(true)}
                >
                  <SeeAllText>See All</SeeAllText>
                </ScrollLink>
              ) : null}
            </Box>
          </Col>
        </Row>

        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <Row>
              {allTalent.slice(20, 40).map((x, i) => (
                <Col
                  key={`category-talent-${i}`}
                  xs={6}
                  md={3}
                  id={i === 19 ? "more" : ""}
                >
                  <SpeakerCard
                    slug={x.slug}
                    imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
                    name={x.name}
                    description={x.titles[0]}
                  />
                </Col>
              ))}
              {showAll &&
                allTalent.slice(40).map((x, i) => (
                  <Col key={`category-talent-${i}`} xs={6} md={3}>
                    <SpeakerCard
                      slug={x.slug}
                      imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
                      name={x.name}
                      description={x.titles[0]}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </StyledContainer>
      <Box height="80px" />
      <StarPower />
    </div>
  );
};

export default CategoryPage;
