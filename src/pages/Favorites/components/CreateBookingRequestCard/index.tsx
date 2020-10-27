import React, { FC } from "react";
import { Wrapper, HeaderText, MessageText, Content } from "./styles";
import { Button } from "styles/components";

const CreateBookingRequestCard: FC = () => {
  return (
    <Wrapper>
      <Content>
        <HeaderText>Create a booking request with your favorites!</HeaderText>
        <MessageText>
          Don't worry - you can always add or edit the speakers in your request.
        </MessageText>
        <Button>Get Started!</Button>
      </Content>
    </Wrapper>
  );
};

export default CreateBookingRequestCard;
