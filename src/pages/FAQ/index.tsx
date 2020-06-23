import React, { FC } from "react";
import { Row, Col } from "react-grid-system";
import StarPower from "components/StarPower";
import { BigText, TopAreaDivider, StyledContainer } from "styles/components";
import QuestionAnswer from "./QuestionAnswer";

const FAQ: FC = () => {
  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} xs={12} lg={10}>
            <BigText margin="80px 0 0 0">FAQ</BigText>
          </Col>
        </Row>
        <TopAreaDivider />
        <QuestionAnswer
          question="Question 1 - What is Lorem Ipsum?"
          answer="Answer 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida scelerisque sagittis. Pellentesque egestas vulputate rutrum. Maecenas vel mattis nisl. Vestibulum a commodo nulla."
        />
        <QuestionAnswer
          question="Question 2 - What is Lorem Ipsum?"
          answer="Answer 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida scelerisque sagittis. Pellentesque egestas vulputate rutrum. Maecenas vel mattis nisl. Vestibulum a commodo nulla."
        />
        <QuestionAnswer
          question="Question 3 - What is Lorem Ipsum?"
          answer="Answer 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida scelerisque sagittis. Pellentesque egestas vulputate rutrum. Maecenas vel mattis nisl. Vestibulum a commodo nulla."
        />
        <QuestionAnswer
          question="Question 4 - What is Lorem Ipsum?"
          answer="Answer 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida scelerisque sagittis. Pellentesque egestas vulputate rutrum. Maecenas vel mattis nisl. Vestibulum a commodo nulla."
        />
      </StyledContainer>
      <StarPower />
    </div>
  );
};

export default FAQ;
