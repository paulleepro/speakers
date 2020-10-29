import useApiClient from "../useApiClient";
import { useMutation, useQuery, useQueryCache } from "react-query";
import { config } from "../../config";
import pick from "lodash.pick";
import { useAuth } from "context/AuthContext";

const useFavoritesLists: any = () => {
  const { isAuthenticated } = useAuth();
  const apiClient = useApiClient();
  return useQuery({
    queryKey: ["favorites-lists"],
    queryFn: () => apiClient(`${config.speakersBookingUrl}/v1/favorites-list/`),
    config: {
      enabled: isAuthenticated,
    },
  });
};

const useFavoritesList: any = (id: string) => {
  const apiClient = useApiClient();
  return useQuery({
    queryKey: ["favorites-list", id],
    queryFn: (key: string, id: string) =>
      apiClient(`${config.speakersBookingUrl}/v1/favorites-list/${id}`),
  });
};

const useCreateFavoritesList: any = (options: object) => {
  const apiClient = useApiClient();
  return useMutation(
    ({ name, talentIds }: { name: string; talentIds: [string] }) =>
      apiClient(`${config.speakersBookingUrl}/v1/favorites-list/`, {
        method: "POST",
        data: { name, talent_ids: talentIds },
      }),
    options
  );
};

const useUpdateFavoritesList: any = (options: object) => {
  const apiClient = useApiClient();
  const queryCache = useQueryCache();
  return useMutation(
    ({ id, data }: any) =>
      apiClient(`${config.speakersBookingUrl}/v1/favorites-list/${id}`, {
        method: "PUT",
        data: pick(data, ["name", "talent_ids"]),
      }),
    {
      onMutate: (list) => {
        // do optimistic update
        const previousListItems = queryCache.getQueryData("favorites-list");
        const previousListsItems = queryCache.getQueryData("favorites-lists");
        queryCache.setQueryData("favorites-lists", (old: any) => ({
          ...old,
          data: [list.data],
        }));
        queryCache.setQueryData("favorites-list", (old: any) => ({
          ...old,
          data: list.data,
        }));
        return () => {
          queryCache.setQueryData("favorites-list", previousListItems);
          queryCache.setQueryData("favorites-lists", previousListsItems);
        };
      },
      onSettled: () => {
        queryCache.invalidateQueries("favorites-list");
        queryCache.invalidateQueries("favorites-lists");
      },
      ...options,
    }
  );
};

const useDeleteFavoritesList: any = (id: string, options: object) => {
  const apiClient = useApiClient();
  return useMutation(
    () =>
      apiClient(`${config.speakersBookingUrl}/v1/favorites-list/${id}`, {
        method: "DELETE",
      }),
    options
  );
};

export {
  useFavoritesLists,
  useFavoritesList,
  useCreateFavoritesList,
  useUpdateFavoritesList,
  useDeleteFavoritesList,
};
