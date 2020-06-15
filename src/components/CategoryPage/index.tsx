import React, { FC, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
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
  DescriptionText,
  HeaderText,
} from "styles/components";
import SectionTitle from "./SectionTitle";
import colors from "styles/colors";
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
      <Container fluid>
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
      </Container>
      <Box height="1px" borderBottom={`1px solid ${colors.purpleBgFill}`} />
      <SectionTitle title={`Featured ${name}`} />
      <Featured data={featuredTalent} />
      <SectionTitle title={`New ${name}`} />
      <Featured data={newTalent} mdCardsPerRow={4} />
      <Row>
        <Col offset={{ lg: 1 }} xs={12} md={10} lg={7}>
          <Box margin="80px 0 0 0">
            <HeaderText>More {name}</HeaderText>
          </Box>
        </Col>
        <Col xs={12} md={2} lg={3}>
          <Box margin="80px 0 0 0" alignItems="flex-end" cursor="pointer">
            {!showAll ? (
              <ScrollLink
                to="more"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setShowAll(true)}
              >
                <DescriptionText>See All</DescriptionText>
              </ScrollLink>
            ) : null}
          </Box>
        </Col>
      </Row>

      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <Row>
              {allTalent.slice(0, 20).map((x, i) => (
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
                allTalent.slice(20).map((x, i) => (
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
      </Container>
      <Box height="80px" />
      <StarPower />
    </div>
  );
};

export default CategoryPage;
