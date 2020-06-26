import React, { FC } from "react";
import { Row, Col, Visible } from "react-grid-system";
import { Link } from "react-router-dom";
import { DescriptionText, StyledContainer } from "styles/components";
import Loader from "components/Loader";
import { fetchSingle } from "fetch-hooks-react";
import { IListResult, ITopic, IType } from "types";
import { config } from "config";
import ErrorNotice from "components/ErrorNotice";
import { ArrowLeftText, BigText, TopAreaDivider } from "styles/components";
import { Box } from "react-basic-blocks";
import colors from "styles/colors";
import StarPower from "components/StarPower";
import TopLeftGradient from "components/TopLeftGradient";

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
    return <ErrorNotice />;
  }

  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <Box padding="40px 0 0 0">
              <Link to="/explore">
                <ArrowLeftText>BACK TO EXPLORE</ArrowLeftText>
              </Link>
              <BigText>Browse by Topic</BigText>
            </Box>
          </Col>
        </Row>
      </StyledContainer>
      <TopAreaDivider />
      <Visible md lg>
        <TopLeftGradient height="800px" width="60%" borderRadius="600px" />
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
                    <Link key={id} to={`/subtopic/${slug}`}>
                      <DescriptionText noCenterAlign>{name}</DescriptionText>
                    </Link>
                  ))}
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </StyledContainer>
      <Box margin="40px 0" />
      <StarPower />
    </div>
  );
};

export default Topics;
