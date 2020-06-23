import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  HeaderText,
  DescriptionText,
  Divider,
  BigText,
} from "styles/components";
import { Box } from "react-basic-blocks";
import { IReview } from "types";
import { StyledUl } from "./styles";
import colors from "styles/colors";

interface IProps {
  name: string;
  reviews: IReview[];
}

const MoreAboutTalent: FC<IProps> = ({ name, reviews }) => {
  if (!reviews.length) {
    return null;
  }

  return (
    <Container fluid>
      <Row>
        <Col offset={{ lg: 1 }} md={12} lg={10}>
          <Box margin="80px 0 0 0">
            <HeaderText>More About {name}</HeaderText>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col offset={{ lg: 1 }} xs={12} md={7} lg={6}>
          <Box margin="30px 0">
            <DescriptionText weight="bold">
              Reviews About {name}
            </DescriptionText>
            <Divider width="200px" />
            <Box flexDirection="row">
              <BigText margin="-20px 5px" color={colors.midGrey}>
                “
              </BigText>
              <DescriptionText>{reviews[0]?.quote}</DescriptionText>
              <Box alignSelf="flex-end">
                <BigText margin="-50px 0" color={colors.midGrey}>
                  ”
                </BigText>
              </Box>
            </Box>
            <Box margin="20px 55px">
              <DescriptionText>- {reviews[0]?.attribution}</DescriptionText>
            </Box>
          </Box>
        </Col>
        <Col offset={{ md: 1 }} xs={12} md={4} lg={3}>
          <Box margin="30px 0">
            <DescriptionText weight="bold">
              Hosted By Groups Like
            </DescriptionText>
            <Divider width="200px" />
            <StyledUl color={colors.white}>
              {reviews.map((x, i) => (
                <li key={`review-${i}`}>
                  <DescriptionText color={colors.white} noCenterAlign>
                    {x.attribution}
                  </DescriptionText>
                </li>
              ))}
            </StyledUl>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default MoreAboutTalent;
