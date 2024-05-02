import apiClient from "@/services/api-client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

interface FetchedData<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  queryKey: string,
  requestConfig?: AxiosRequestConfig
) => {
  const fetchData = async () => {
    const response = await apiClient.get<FetchedData<T>>(endPoint, {
      ...requestConfig,
    });
    return response.data;
  };
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);

  console.log(`Fetching data... ${queryKey}`);
  console.log(`queryKeys: ${queryKeys}`);
  const { data, error, isPending } = useQuery({
    queryKey: ["queryKey"],
    queryFn: fetchData,
  });

  return { data, error, isPending };
};

export default useData;
