import { GENRE_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  const fetchGenre = async () => {
    return apiClient.getAll();
  };

  return useQuery({
    queryKey: [GENRE_CACHE_KEY],
    queryFn: fetchGenre,
    staleTime: ms("24h"),
  });
};

export default useGenres;
