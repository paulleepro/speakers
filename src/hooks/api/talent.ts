import { useQuery } from "react-query";
import { config } from "../../config";
import useApiClient from "../useApiClient";

const useTalents = (ids: string[], options?: object) => {
  const apiClient = useApiClient();
  return useQuery({
    queryKey: ["talents", ids],
    queryFn: (key: string, ids: string[]) =>
      apiClient(
        `${
          config.speakersTalentUrl
        }/v1/talents/?fields=name,id,slug,titles,media&where=id:in:${ids.join(
          ":"
        )}`
      ),
    config: {
      enabled: ids?.length > 0,
      ...options,
    },
  });
};

export { useTalents };
