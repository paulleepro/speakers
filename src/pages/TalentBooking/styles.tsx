import styled from "styled-components";
import colors from "styles/colors";

export const Select = styled.select`
  background-color: ${colors.black};
  border: 1px solid ${colors.midGrey};
  border-radius: 12px;
  outline: none;
  padding: 14px 24px;
  appearance: none;
  width: 100%;

  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${colors.primaryPurple} 50%
    ),
    linear-gradient(135deg, ${colors.primaryPurple} 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(25px),
    calc(100% - 15px) calc(25px), calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;

  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.midGrey};
  }
`;

export const Input = styled.input`
  background-color: ${colors.black};
  border: 1px solid ${colors.midGrey};
  border-radius: 12px;
  outline: none;
  padding: 14px 24px;
  width: 100%;

  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #ffffff;

  &::placeholder {
    color: ${colors.midGrey};
  }

  &:focus {
    color: #ffffff;
  }
`;

export const TextArea = styled.textarea`
  background-color: ${colors.black};
  border: 1px solid ${colors.midGrey};
  border-radius: 12px;
  outline: none;
  padding: 14px 24px;
  width: 100%;

  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.midGrey};
  }

  &:focus {
    color: #ffffff;
  }
`;

export const InputLabel = styled.span<{ margin?: string }>`
  margin: ${(props) => props.margin || "20px 0"};
  display: block;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
`;

export const StyledForm = styled.form`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .date-picker {
    width: 100%;
    background-color: black;
    border: 1px solid ${colors.midGrey};
    border-radius: 12px;
    outline: none;
    cursor: pointer;
    padding: 14px 24px;

    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.2px;
    color: ${colors.white};
  }
`;

export const Checkbox = styled.input`
  background-color: transparent;
  border: 1px solid ${colors.midGrey};
  border-radius: 12px;
  outline: none;
  padding: 14px 24px;
  width: 100%;

  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.midGrey};
  }
`;

export const SmallImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
`;
