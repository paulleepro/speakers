import React, { FC, useState, useEffect, useRef } from "react";
import { VirtualText, BigText, HeaderText } from "styles/components";
import { Container, Row, Col } from "react-grid-system";
import Tabs from "components/Tabs";
import { scroller } from "react-scroll";
import { Box } from "react-basic-blocks";

interface IProps {
  tabs: string[];
}

const Title: FC<IProps> = ({ tabs }) => {
  const isFirstRun = useRef(true);
  const [activeTab, setActiveTab] = useState<number>(0);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const containerId = tabs[activeTab].replace(/ /g, "-").toLowerCase();
    scroller.scrollTo(containerId, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
    // eslint-disable-next-line
  }, [activeTab]);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <VirtualText>Virtual Speakers</VirtualText>
            <BigText>Explore</BigText>

            <Tabs
              values={tabs}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </Col>
        </Row>
        <Row>
          <Col offset={{ lg: 1 }} lg={10}>
            <Box margin="120px 0 0 0">
              <HeaderText>Featured</HeaderText>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Title;
