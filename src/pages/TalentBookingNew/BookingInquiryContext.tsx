import React, { createContext, FC, useState } from "react";
import { IBookingInquiry } from "./types";

export interface IBookingInquiryContext {
  setBookingInquiry: (val: IBookingInquiry) => void;
  bookingInquiry: IBookingInquiry;
  currentStep: number;
  setCurrentStep: (value: number) => void;
}

export const BookingInquiryContext = createContext<IBookingInquiryContext>(
  {} as IBookingInquiryContext
);

export const BookingInquiryProvider: FC = ({ children }) => {
  const [bookingInquiry, setBookingInquiry] = useState<IBookingInquiry>(
    {} as IBookingInquiry
  );
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <BookingInquiryContext.Provider
      value={{ bookingInquiry, setBookingInquiry, currentStep, setCurrentStep }}
    >
      {children}
    </BookingInquiryContext.Provider>
  );
};
