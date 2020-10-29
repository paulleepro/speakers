import React, { FC, useContext } from "react";
import EditIcon from "assets/icons/Edit";
import { Button } from "styles/components";
import { Box } from "react-basic-blocks";
import { BookingInquiryContext } from "../BookingInquiryContext";
import FieldSection from "../components/FormSummary/FieldSection";
import { Border } from "../components/FormSummary/styles";
import { Title } from "./styles";
import { QuestionBullet } from "../common/QuestionHeader/styles";
import { SummaryField } from "./Details";

const SpeakersSummary: FC<any> = () => {
  const {
    bookingInquiry,
    currentStep,
    setCurrentStep,
    favoritesList,
    moreTalents,
  } = useContext(BookingInquiryContext);

  if (currentStep < 1) {
    return null;
  }

  const {
    considered_talent_types,
    have_hosted_speakers,
    notes,
    hosted_speakers,
  } = bookingInquiry;

  const handleClick = () => {
    setCurrentStep(1);
  };

  return (
    <Box>
      <Title active>
        Speakers
        {currentStep > 1 && (
          <Button
            padding="0"
            margin="0"
            backgroundColor="transparent"
            onClick={handleClick}
          >
            <EditIcon />
          </Button>
        )}
      </Title>
      {/* <FieldSection order={1} label="More" value={talent_ids?.join(", ")} /> */}
      {(favoritesList !== undefined || moreTalents.length > 0) && (
        <Box flexDirection="row">
          <QuestionBullet margin="0 8px 0 0">1</QuestionBullet>
          <Box flexDirection="column" margin="0 0 16px 0">
            {favoritesList !== undefined && (
              <SummaryField label="Favorites" value={favoritesList?.name} />
            )}
            {moreTalents.length > 0 && (
              <SummaryField
                label="More"
                value={moreTalents.map((t) => t.name).join(", ")}
              />
            )}
          </Box>
        </Box>
      )}
      <FieldSection
        order={2}
        label="Types"
        value={considered_talent_types?.join(", ")}
      />
      {(have_hosted_speakers !== undefined || hosted_speakers) && (
        <Box flexDirection="row">
          <QuestionBullet margin="0 8px 0 0">3</QuestionBullet>
          <Box flexDirection="column" margin="0 0 16px 0">
            <SummaryField
              label="Hosted Before"
              value={have_hosted_speakers ? "Yes" : "No"}
            />
            <SummaryField label="Speakers" value={hosted_speakers} />
          </Box>
        </Box>
      )}
      <FieldSection order={4} label="Notes" value={notes} />
      <Border />
    </Box>
  );
};

export default SpeakersSummary;
