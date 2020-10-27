import { useQuery } from "react-query";
import { config } from "../../config";
import useApiClient from "../useApiClient";

const useIdentity = (id: string) => {
  const apiClient = useApiClient();
  return useQuery({
    queryKey: ["identity", id],
    queryFn: (key: string, id: string) =>
      apiClient(`${config.accountsUrl}/v1/identities/${id}`, {}),
  });
};

const useMyIdentity = () => useIdentity("me");

export { useIdentity, useMyIdentity };
