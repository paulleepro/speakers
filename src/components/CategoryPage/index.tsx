import React, { FC, useState } from "react";
import { Row, Col, Visible } from "components/Grid";
import { config } from "config";
import SpeakerCard from "components/SpeakerCard";
import Featured from "components/Featured";
import { ITalent } from "types";
import { Box } from "react-basic-blocks";
import { Link as ScrollLink } from "react-scroll";
import {
  BigText,
  HeaderText,
  TopAreaDivider,
  SeeAllText,
  StyledContainer,
} from "styles/components";
import StarPower from "components/StarPower";
import TopLeftGradient from "components/TopLeftGradient";
import colors from "styles/colors";
import { SeeAllContainer } from "./styles";
import HeaderTags from "components/HeaderTags";

interface IProps {
  name: string;
  featuredTalent: ITalent[];
  newTalent: ITalent[];
  allTalent: ITalent[];
  totalTalent: number;
}

const CategoryPage: FC<IProps> = ({
  name,
  featuredTalent,
  newTalent,
  allTalent,
  totalTalent,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div>
      <HeaderTags
        title={name}
        description={`Search for talent in the ${name} category.`}
      />
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <Box padding="40px 0 0 0">
              <BigText>{name}</BigText>
            </Box>
          </Col>
        </Row>
      </StyledContainer>
      <TopAreaDivider />
      <Visible md lg>
        <TopLeftGradient height="800px" width="60%" borderRadius="600px" />
      </Visible>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <HeaderText
              margin="0 0 12px 0"
              noCenterAlign
            >{`Featured ${name}`}</HeaderText>
          </Col>
        </Row>
        <Featured data={featuredTalent} mdCardsPerRow={4} />
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <HeaderText
              margin="80px 0 12px 0"
              noCenterAlign
            >{`New ${name}`}</HeaderText>
          </Col>
        </Row>
        <Featured data={newTalent} mdCardsPerRow={4} />
        {allTalent.length > 20 && (
          <>
            <Row>
              <Col offset={{ lg: 1 }} xs={12} md={10} lg={7}>
                <HeaderText margin="80px 0 12px 0" noCenterAlign>
                  More {name}
                </HeaderText>
              </Col>
              <Col xs={12} md={2} lg={3}>
                <SeeAllContainer>
                  {!showAll && allTalent.length > 40 ? (
                    <>
                      <SeeAllText color={colors.midGrey}>
                        20 out of {totalTalent - 20}
                      </SeeAllText>
                      <SeeAllText color={colors.purpleLiner} margin="0 6px">
                        {" | "}
                      </SeeAllText>
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
                    </>
                  ) : null}
                </SeeAllContainer>
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
            <Row>
              <Col offset={{ lg: 1 }} xs={12} lg={10}>
                <div>
                  <SeeAllContainer margin="24px 0 0 0">
                    {!showAll && allTalent.length > 40 ? (
                      <>
                        <SeeAllText color={colors.midGrey}>
                          20 out of {totalTalent - 20}
                        </SeeAllText>
                        <SeeAllText color={colors.purpleLiner} margin="0 6px">
                          {" | "}
                        </SeeAllText>
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
                      </>
                    ) : null}
                  </SeeAllContainer>
                </div>
              </Col>
            </Row>
          </>
        )}
      </StyledContainer>
      <Box height="80px" />
      <StarPower />
    </div>
  );
};

export default CategoryPage;
