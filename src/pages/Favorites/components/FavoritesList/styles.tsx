import styled from "styled-components";

export const EditIcon = styled.img`
  margin-right: 16px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const TitleWrapper = styled.div`
  height: 54px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
`;

export const HeaderButtons = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;

  button {
    margin: 0 0 0 16px;
  }

  @media (max-width: 1023px) {
    margin-top: 12px;

    button {
      margin: 0 16px 0 0;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 4px;
    width: 100%;

    button {
      margin: 8px 0 0 0;
    }
  }
`;

export const SpeakersWrapper = styled.div`
  margin-top: 6px;
  margin-bottom: 120px;

  @media (max-width: 767px) {
    margin-top: 4px;
    margin-bottom: 80px;
  }
`;
