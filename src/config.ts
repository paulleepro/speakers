export const config = {
  imageProxyUrl: process.env.REACT_APP_IMAGE_PROXY_URL || "",
  speakersTalentUrl:
    process.env.REACT_APP_SPEAKERS_TALENT_URL || "/api/speakers-talent",
  speakersBookingUrl:
    process.env.REACT_APP_SPEAKERS_BOOKING_URL || "/api/speakers-booking",
  speakersAuthUrl: process.env.REACT_APP_SPEAKERS_AUTH_URL || "/api/auth",
  pageTitle: "WME Speakers Beta",
};
