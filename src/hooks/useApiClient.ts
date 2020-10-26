import { useAuth } from "../context/AuthContext";
import apiClient from "../utils/api-client";
import { useCallback } from "react";

const useApiClient = () => {
  const { bearerToken } = useAuth();
  return useCallback(
    (endpoint, config) => apiClient(endpoint, { ...config, bearerToken }),
    [bearerToken]
  );
};

export default useApiClient;
