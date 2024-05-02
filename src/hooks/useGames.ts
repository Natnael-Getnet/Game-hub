import { GameQuery } from "@/App";
import { GAME_CACHE_KEY } from "@/constants";
import apiClient, { FetchedData } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  background_image: string;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (gameQuery: GameQuery) => {
  const fetchData = async () => {
    const response = await apiClient.get<FetchedData<Game>>("/games", {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    });
    return response.data;
  };

  return useQuery({
    queryKey: [GAME_CACHE_KEY, gameQuery],
    queryFn: fetchData,
  });
};

export default useGame;
