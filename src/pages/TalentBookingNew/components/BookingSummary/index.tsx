import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useAuth } from "context/AuthContext";
import { Button } from "styles/components";
import { Wrapper } from "./styles";
import EventSummary from "../../summary/Event";
import SpeakersSummary from "../../summary/Speakers";
import DetailsSummary from "../../summary/Details";
import { useCreateBookingInquiry } from "hooks/api/bookingInquiry";
import { useError } from "context/ErrorContext";
import { BookingInquiryContext } from "pages/TalentBookingNew/BookingInquiryContext";

const BookingSummary = () => {
  const { addError } = useError();
  const { bookingInquiry } = useContext(BookingInquiryContext);
  const history = useHistory();
  const { isAuthenticated } = useAuth();
  const [
    doCreateBookingInquiry,
    { isLoading: isCreating },
  ] = useCreateBookingInquiry();

  const createBookingInquiry = async () => {
    if (isCreating || !bookingInquiry) {
      return;
    }

    await doCreateBookingInquiry(
      { ...bookingInquiry, status: "draft" },
      {
        onSuccess: () => history.push("/"),
        onError: (e: any) => {
          addError("We encountered a problem saving your booking request.");
        },
      }
    );
  };

  const handleSave = () => {
    if (isAuthenticated) {
      createBookingInquiry();
      return;
    }
  };

  return (
    <Wrapper>
      <EventSummary />
      <SpeakersSummary />
      <DetailsSummary />
      <Button variant="outline" width="100%" onClick={handleSave}>
        Save for later
      </Button>
    </Wrapper>
  );
};

export default BookingSummary;
