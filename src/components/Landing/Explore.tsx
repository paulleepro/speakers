import React, { FC, useState } from "react";
import { Container, Row, Col, Visible } from "react-grid-system";
import { HeaderText, Button } from "styles/components";
import { Box } from "react-basic-blocks";
import "swiper/css/swiper.css";
import Tabs from "components/Tabs";
import { fetchSingle } from "fetch-hooks-react";
import { config } from "config";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import { IListResult, ITalent } from "types";
import FeaturedCards from "components/shared/FeaturedCards";
import SwipeableCards from "components/shared/SwipeableCards";

const tabValues = {
  Featured: [
    "lin-manuel-miranda",
    "kevin-hart",
    "alex-rodriguez",
    "tyler-perry",
    "indra-nooyi",
    "venus-williams",
  ],
  "World Leaders": [
    "peter-westmacott",
    "julia-gillard",
    "al-gore",
    "vicente-fox",
    "felipe-calderon",
    "dominique-de-villepin",
  ],
  Corporate: [
    "mitch-lowe",
    "terry-jones",
    "dave-zilko",
    "john-nosta",
    "katara-mccarty",
    "charlotte-jones-anderson",
  ],
  Entertainers: [
    "ricki-lake",
    "nancy-spielberg",
    "arnold-schwarzenegger",
    "annabelle-gurwitch",
    "ken-burns",
    "latosha-brown",
  ],
  Athletes: [
    "erin-andrews",
    "joe-theismann",
    "carl-lewis",
    "jim-palmer",
    "troy-aikman",
    "tom-brady",
  ],
  Comedians: [
    "jon-macks",
    "david-feherty",
    "roy-wood-jr",
    "ben-schwartz",
    "kevin-smith",
    "jeff-havens",
  ],
};

const tabs = Object.keys(tabValues);

const Explore: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const slugs = Object.values(tabValues)
    .reduce((prev, curr) => [...prev, ...curr], [])
    .join(":");
  const { data, error, isLoading } = fetchSingle<IListResult<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents?fields=name,id,slug,titles,media&where=slug:in:${slugs}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  // @ts-ignore
  const currentTalent = data.data.filter((x) =>
    tabValues[tabs[activeTab]]?.includes(x.slug)
  );

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={10} md={12} offset={{ lg: 1 }}>
            <Box alignItems="center" margin="120px 0 0 0">
              <HeaderText>Explore Speakers</HeaderText>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg={10} md={12} offset={{ lg: 1 }}>
            <Box alignItems="center">
              <Tabs
                values={tabs}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg={10} md={12} offset={{ lg: 1 }}>
            <Visible lg md>
              <FeaturedCards talentList={currentTalent} />
            </Visible>
            <Visible xs sm>
              <SwipeableCards talentList={currentTalent} />
            </Visible>
          </Col>
        </Row>

        <Row>
          <Col>
            <Box alignItems="center">
              <Button margin="40px 0 0 0">See All Speakers</Button>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Explore;
