import useApiClient from "../useApiClient";
import { useMutation } from "react-query";
import { config } from "../../config";

const useCreateBookingInquiry: any = (options: object) => {
  const apiClient = useApiClient();
  return useMutation(
    (data) =>
      apiClient(`${config.speakersBookingUrl}/v1/booking-inquiry/`, {
        method: "POST",
        data,
      }),
    options
  );
};

export { useCreateBookingInquiry };
