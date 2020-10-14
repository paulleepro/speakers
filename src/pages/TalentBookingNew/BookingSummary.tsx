import React from "react";

import { Button } from "styles/components";
import { BookingSummaryContainer } from "./styles";

const BookingSummary = () => {
  return (
    <BookingSummaryContainer>
      <h3>Event Details</h3>
      <hr />
      <Button variant="outline" width="100%">
        Save for later
      </Button>
    </BookingSummaryContainer>
  );
};

export default BookingSummary;
