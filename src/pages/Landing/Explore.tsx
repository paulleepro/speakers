import React, { FC, useState, memo, lazy } from "react";
import { Row, Col } from "components/Grid";
import { HeaderText, Button, StyledContainer } from "styles/components";
import { Link } from "react-router-dom";
import { Box } from "react-basic-blocks";
import "swiper/css/swiper.css";
import { fetchSingle } from "fetch-hooks-react";
import { config } from "config";
import Loader from "components/Loader";
import { IListResult, ITalent } from "types";
import { hardCodedTalent } from "hard-coded-talent";
import LazyWrapper from "components/LazyWrapper";

const Tabs = lazy(() => import("components/Tabs"));
const ErrorNotice = lazy(() => import("components/ErrorNotice"));
const Featured = lazy(() => import("components/Featured"));

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
    return (
      <LazyWrapper>
        <ErrorNotice />
      </LazyWrapper>
    );
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
              <Box alignItems="center" margin="100px 0 0 0">
                <HeaderText smallerOnMobile>Discover Top Talent</HeaderText>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col lg={10} md={12} offset={{ lg: 1 }}>
              <Box alignItems="center">
                <LazyWrapper>
                  <Tabs
                    values={tabs}
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                  />
                </LazyWrapper>
              </Box>
            </Col>
          </Row>
          <LazyWrapper>
            <Featured data={currentTalent} mdCardsPerRow={4} />
          </LazyWrapper>
          <Row>
            <Col>
              <Box alignItems="center">
                <Link to="/explore">
                  <Button margin="40px 0 0 0">See All Performers</Button>
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
