import { GENRE_CACHE_KEY } from "@/constants";
import apiClient, { FetchedData } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const fetchGenre = async () => {
    const response = await apiClient.get<FetchedData<Genre>>("/genres");
    return response.data;
  };

  return useQuery({ queryKey: [GENRE_CACHE_KEY], queryFn: fetchGenre });
};

export default useGenre;
