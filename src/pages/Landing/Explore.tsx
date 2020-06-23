import React, { FC, useState, memo } from "react";
import { Row, Col } from "react-grid-system";
import { HeaderText, Button, StyledContainer } from "styles/components";
import { Link } from "react-router-dom";
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
        <StyledContainer fluid>
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
          <Featured data={currentTalent} />
          <Row>
            <Col>
              <Box alignItems="center">
                <Link to="/explore">
                  <Button margin="40px 0 0 0">See All Speakers</Button>
                </Link>
              </Box>
            </Col>
          </Row>
        </StyledContainer>
      </div>
    </>
  );
};

export default memo(Explore);
