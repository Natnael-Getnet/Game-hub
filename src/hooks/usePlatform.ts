import { PLATFORM_CACHE_KEY } from "@/constants";
import apiClient, { FetchedData } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const fetchPlatform = async () => {
    const response = await apiClient.get<FetchedData<Platform>>(
      "/platforms/lists/parents"
    );
    return response.data;
  };

  return useQuery({ queryKey: [PLATFORM_CACHE_KEY], queryFn: fetchPlatform });
};
export default usePlatform;
