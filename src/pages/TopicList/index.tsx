import React, { FC, lazy } from "react";
import { Row, Col, Visible } from "components/Grid";
import { DescriptionText, StyledContainer } from "styles/components";
import Loader from "components/Loader";
import { fetchSingle } from "fetch-hooks-react";
import { IListResult, ITopic, IType } from "types";
import { config } from "config";
import { BigText, TopAreaDivider } from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import { StyledLink } from "./styles";
import LazyWrapper from "components/LazyWrapper";

const ErrorNotice = lazy(() => import("components/ErrorNotice"));
const StarPower = lazy(() => import("components/StarPower"));
const TopLeftGradient = lazy(() => import("components/TopLeftGradient"));
const HeaderTags = lazy(() => import("components/HeaderTags"));

const MAX_COLUMNS = 2;

const getSubtopics = (i: number, subtopics: IType[]) => {
  if (!subtopics) {
    return [];
  }

  const colLength = Math.floor(subtopics.length) / MAX_COLUMNS;
  if (i === MAX_COLUMNS - 1) {
    return subtopics.slice(colLength * i);
  } else {
    return subtopics.slice(i * colLength, colLength * (i + 1));
  }
};

const Topics: FC = () => {
  const { data, isLoading, error } = fetchSingle<IListResult<ITopic>>(
    `${config.speakersTalentUrl}/v1/talents/metadata/topics?order=name:asc`
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

  return (
    <div>
      <HeaderTags
        title="Topic List"
        description={`Search for speakers in our many categories.`}
      />
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <Box padding="40px 0 0 0">
              <BigText>Browse by Topic</BigText>
            </Box>
          </Col>
        </Row>
      </StyledContainer>
      <TopAreaDivider />
      <Visible md lg>
        <LazyWrapper>
          <TopLeftGradient height="800px" width="60%" borderRadius="600px" />
        </LazyWrapper>
      </Visible>
      <StyledContainer fluid>
        {data.data.map(({ name, id, subtopics }) => (
          <div key={id}>
            <Row>
              <Col offset={{ lg: 1 }} xs={12} lg={10}>
                <Box
                  borderBottom={`1px solid ${colors.purpleLiner}`}
                  margin="40px 0 20px"
                  padding="10px 0"
                >
                  <DescriptionText
                    weight="bold"
                    color={colors.midGrey}
                    noCenterAlign
                  >
                    {name}
                  </DescriptionText>
                </Box>
              </Col>
            </Row>
            <Row>
              {[0, 1].map((i) => (
                <Col
                  offset={{ lg: i === 0 ? 1 : 0 }}
                  xs={12}
                  md={6}
                  lg={5}
                  key={`type-col-${i}`}
                >
                  {getSubtopics(i, subtopics).map(({ name, id, slug }) => (
                    <StyledLink key={id} to={`/subtopic/${slug}`}>
                      {name}
                    </StyledLink>
                  ))}
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </StyledContainer>
      <Box margin="40px 0" />
      <LazyWrapper>
        <StarPower />
      </LazyWrapper>
    </div>
  );
};

export default Topics;
