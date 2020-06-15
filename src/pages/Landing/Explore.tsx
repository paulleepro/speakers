import React, { FC, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { HeaderText, Button } from "styles/components";
import { Box } from "react-basic-blocks";
import "swiper/css/swiper.css";
import Tabs from "components/Tabs";
import { fetchSingle } from "fetch-hooks-react";
import { config } from "config";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import { IListResult, ITalent } from "types";
import Featured from "components/Featured";
import { hardCodedTalent } from "hard-coded-talent";

const tabs = hardCodedTalent.map(({ name }) => name);

const Explore: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const slugs = hardCodedTalent
    .reduce((prev, curr) => [...prev, ...curr.talent], [] as string[])
    .join(":");
  const { data, error, isLoading } = fetchSingle<IListResult<ITalent>>(
    `${config.speakersTalentUrl}/v1/talents?fields=name,id,slug,titles,media&where=slug:in:${slugs}`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  const currentTalent = data.data.filter((x) =>
    hardCodedTalent[activeTab]?.talent.includes(x.slug)
  );

  return (
    <>
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
        </Container>
      </div>
      <Featured data={currentTalent} />

      <div>
        <Container fluid>
          <Row>
            <Col>
              <Box alignItems="center">
                <Button margin="40px 0 0 0">See All Speakers</Button>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Explore;
