import React from "react";
import { BookingInquiryProvider } from "./BookingInquiryContext";
import TalentBooking from "./TalentBooking";

const TalentBookingInquiry = () => {
  return (
    <BookingInquiryProvider>
      <TalentBooking />
    </BookingInquiryProvider>
  );
};

export default TalentBookingInquiry;
