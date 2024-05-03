import { PLATFORM_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const fetchPlatform = async () => {
    return apiClient.getAll();
  };

  return useQuery({ queryKey: [PLATFORM_CACHE_KEY], queryFn: fetchPlatform });
};
export default usePlatforms;
