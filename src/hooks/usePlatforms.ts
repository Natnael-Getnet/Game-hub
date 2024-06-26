import { PLATFORM_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const fetchPlatform = async () => {
    return apiClient.getAll();
  };

  return useQuery({
    queryKey: [PLATFORM_CACHE_KEY],
    queryFn: fetchPlatform,
    staleTime: ms("24h"),
  });
};
export default usePlatforms;
