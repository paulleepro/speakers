import React, { FC, useState, memo } from "react";
import { Row, Col } from "components/Grid";
import {
  HeaderText,
  DescriptionText,
  Button,
  StyledContainer,
} from "styles/components";
import { CenterOnMobile } from "./styles";
import { Box } from "react-basic-blocks";
import Tabs from "components/Tabs";
import colors from "styles/colors";
import { Link } from "react-router-dom";
import StyledImage from "components/StyledImage";

const tabValues = {
  "Panel Discussion": {
    copy:
      "Invite several of the biggest names across any field to join a live panel discussion with other speakers, focusing on a particular topic of your choice!",
    image: "/images/panel-discussion.png",
  },
  Keynote: {
    copy:
      "For your next conference, have the biggest name speaker deliver their long-form message digitally! The talk can be either live or pre-recorded, and will focus all of the topics that matter to you and your business.",
    image: "/images/kendrick-lamar.png",
  },
  "Digital Q & A": {
    copy:
      "Bring a traditional Q&A to a digital setting by booking talent to join a live chat where the audience can ask them specific questions.",
    image: "/images/shaq-collage.png",
  },
  "Live Drop In": {
    copy:
      "The content of the chat can be whatever you like,  ranging from a quick comedy set or musical performance, wishing someone a happy birthday, or a shout out to someone for  business win.",
    image: "/images/kevin-hart.png",
  },
  "Video Message": {
    copy:
      "The talent of your choice will provide a short, pre-recorded video message based on a brief provided by you!",
    image: "/images/barack-obama.png",
  },
};

const tabs = Object.keys(tabValues);

const CustomizeEvent: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  // @ts-ignore
  const { copy, image } = tabValues[tabs[activeTab]];
  return (
    <>
      <Box height="120px" />
      <StyledContainer fluid>
        <Row>
          <Col offset={{ md: 1 }} md={10}>
            <HeaderText>Customize Your Very Own Digital Event</HeaderText>
            <Box margin="0 0 30px 0">
              <Tabs
                values={tabs}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            </Box>
          </Col>
        </Row>
        <Row align="center">
          <Col offset={{ md: 1, sm: 0 }} lg={6} md={5} sm={6} xs={12}>
            <StyledImage src={image} borderRadius="12px" />
            <Box height="10px" />
          </Col>
          <Col lg={4} md={5} sm={6} xs={12}>
            <Box flexDirection="row" alignItems="stretch">
              <Box
                backgroundColor={colors.midDarkGrey}
                margin="20px 0"
                width="20px"
                borderRadius="12px 0 0 12px"
                border="1px solid #2a2a2a"
              />
              <Box
                backgroundColor={colors.midDarkGrey}
                borderRadius="12px"
                border="1px solid #2a2a2a"
                padding="40px"
              >
                <DescriptionText weight="bold">
                  {tabs[activeTab]}
                </DescriptionText>
                <DescriptionText color={colors.midGrey}>{copy}</DescriptionText>
                <CenterOnMobile>
                  <Link to="/how-it-works">
                    <Button margin="30px 0 0 0 ">Learn More</Button>
                  </Link>
                </CenterOnMobile>
              </Box>
            </Box>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default memo(CustomizeEvent);
