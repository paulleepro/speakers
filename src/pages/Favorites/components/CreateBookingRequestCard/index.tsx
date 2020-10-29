import React, { FC } from "react";
import { Wrapper, HeaderText, MessageText, Content } from "./styles";
import { Button } from "styles/components";
import { useHistory } from "react-router";

const CreateBookingRequestCard: FC = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Content>
        <HeaderText>Create a booking request with your favorites!</HeaderText>
        <MessageText>
          Don't worry - you can always add or edit the speakers in your request.
        </MessageText>
        <Button
          onClick={() => {
            // TODO - this needs to go to the talent booking form.  At the moment the route requires a slug
            // but that is going to be updated during the booking form work so that the slug is optional
            // we need to wait for that to be done
            history.push("/");
          }}
        >
          Get Started!
        </Button>
      </Content>
    </Wrapper>
  );
};

export default CreateBookingRequestCard;
