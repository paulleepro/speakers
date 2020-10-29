import useApiClient from "../useApiClient";
import { useMutation } from "react-query";
import { config } from "../../config";
// import { useAuth } from "context/AuthContext";

const useCreateBookingInquiry: any = (options: object) => {
  const apiClient = useApiClient();
  // const { isAuthenticated } = useAuth();
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
