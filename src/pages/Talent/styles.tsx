import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import colors from "styles/colors";

export const StyledUl = styled.ul<{ color?: string }>`
  margin: 0;

  li {
    color: ${(props) => props.color || colors.midGrey};
    margin-bottom: 10px;
  }
`;

export const AccordionTextBox = styled.div<{ height: string }>`
  ${(props) => `height: ${props.height};`}
  ${(props) => (props.height !== "auto" ? "margin-top: 10px;" : "")};
  overflow: hidden;
`;

export const BookTalentWrapper = styled.div`
  border-top: solid 1px ${colors.purpleLiner};
  border-bottom: solid 1px ${colors.purpleLiner};
  border-radius: 0 300px 0 0;
  background-image: linear-gradient(
    to bottom,
    #000000 30%,
    rgba(34, 30, 41, 0.5)
  );
`;

export const KnownForWrapper = styled.div`
  position: relative;
`;

export const SmallImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
`;

export const FulfilledByText = styled.span`
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${colors.midGrey};
  margin-top: 8px;

  .talent-agency {
    color: #ffffff;
  }

  @media (max-width: 1023px) {
    margin-top: 16px;
  }
`;

export const BioText = styled.span<{ color?: string; cursor?: string }>`
  color: ${(props) => (props.color ? props.color : colors.midGrey)};
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.2px;
`;

export const StyledScrollLink = styled(ScrollLink)`
  display: block;
  margin-top: 10px;
  cursor: pointer;
  color: ${colors.primaryPurple};
  text-decoration: underline;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
`;

export const FavoriteButton = styled.button<{ hasFavorited?: boolean }>`
  position: relative;
  border-radius: 12px;
  border: solid 1px ${colors.primaryPurple};
  background-color: ${colors.black};
  width: 100%;
  padding: 14px;

  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${(props) =>
    props.hasFavorited ? colors.primaryPurple : colors.white};
  cursor: pointer;
  margin-bottom: 8px;
  outline: none;

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 16px;
    margin: auto 0;
    fill: ${(props) =>
      props.hasFavorited ? colors.primaryPurple : colors.white};
  }
`;
