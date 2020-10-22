import React, { createContext, FC, useState } from "react";
import { IBookingInquiry } from "./types";

export interface IBookingInquiryContext {
  setBookingInquiry: (val: IBookingInquiry) => void;
  bookingInquiry: IBookingInquiry;
}

export const BookingInquiryContext = createContext<IBookingInquiryContext>(
  {} as IBookingInquiryContext
);

export const BookingInquiryProvider: FC = ({ children }) => {
  const [bookingInquiry, setBookingInquiry] = useState<IBookingInquiry>(
    {} as IBookingInquiry
  );

  return (
    <BookingInquiryContext.Provider
      value={{ bookingInquiry, setBookingInquiry }}
    >
      {children}
    </BookingInquiryContext.Provider>
  );
};
