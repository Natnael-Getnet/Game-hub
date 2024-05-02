import { GENRE_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenre = () => {
  const fetchGenre = async () => {
    const response = apiClient.getAll();
    return response;
  };

  return useQuery({ queryKey: [GENRE_CACHE_KEY], queryFn: fetchGenre });
};

export default useGenre;
