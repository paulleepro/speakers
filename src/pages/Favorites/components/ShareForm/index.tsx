import React, { FC } from "react";
import { Wrapper } from "./styles";
import { Col, Row } from "../../../../components/Grid";
import { StyledContainer } from "../../../../styles/components";
import { CloseButton } from "./styles";

interface IProps {
  show: boolean;
  onClose: () => void;
}

const ShareForm: FC<IProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <Wrapper>
      <CloseButton onClick={onClose}>
        <img src="/images/close.png" width="24" alt="Close icon" />
      </CloseButton>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            Hey thre
          </Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

export default ShareForm;
