import React, { createContext, FC, useEffect, useState } from "react";
import { IFavoriteList, ITalent, ITalentType } from "types";
import { IBookingInquiry } from "./types";

export interface IBookingInquiryContext {
  setBookingInquiry: (val: IBookingInquiry) => void;
  bookingInquiry: IBookingInquiry;
  currentStep: number;
  setCurrentStep: (value: number) => void;
  favoritesList: IFavoriteList | undefined;
  setFavoritesList: (list: IFavoriteList | undefined) => void;
  moreTalents: ITalent[];
  setMoreTalents: (talents: ITalent[]) => void;
  favoritesTalents: ITalent[];
  setFavoritesTalents: (talents: ITalent[]) => void;
  talentTypes: ITalentType[];
  setTalentTypes: (talentTypes: ITalentType[]) => void;
}

export const BookingInquiryContext = createContext<IBookingInquiryContext>(
  {} as IBookingInquiryContext
);

export const BookingInquiryProvider: FC = ({ children }) => {
  const [bookingInquiry, setBookingInquiry] = useState<IBookingInquiry>(
    {} as IBookingInquiry
  );
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [favoritesList, setFavoritesList] = useState<IFavoriteList | undefined>(
    undefined
  );
  const [favoritesTalents, setFavoritesTalents] = useState<ITalent[]>([]);
  const [moreTalents, setMoreTalents] = useState<ITalent[]>([]);
  const [talentTypes, setTalentTypes] = useState<ITalentType[]>([]);

  useEffect(() => {
    setBookingInquiry((state) => ({
      ...state,
      talent_ids: [
        ...favoritesTalents.map((t) => t.id),
        ...moreTalents.map((t) => t.id),
      ],
    }));
  }, [favoritesTalents, moreTalents]);

  useEffect(() => {
    setBookingInquiry((state) => ({
      ...state,
      considered_talent_types: talentTypes.map((t) => t.id),
    }));
  }, [talentTypes]);

  return (
    <BookingInquiryContext.Provider
      value={{
        bookingInquiry,
        setBookingInquiry,
        currentStep,
        setCurrentStep,
        favoritesList,
        setFavoritesList,
        favoritesTalents,
        setFavoritesTalents,
        moreTalents,
        setMoreTalents,
        talentTypes,
        setTalentTypes,
      }}
    >
      {children}
    </BookingInquiryContext.Provider>
  );
};
