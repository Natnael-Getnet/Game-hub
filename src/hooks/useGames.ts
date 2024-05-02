import { GameQuery } from "@/App";
import { GAME_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
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

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) => {
  const query = {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  };

  const fetchData = async () => {
    const response = apiClient.getAll(query);
    return response;
  };

  return useQuery({
    queryKey: [GAME_CACHE_KEY, gameQuery],
    queryFn: fetchData,
  });
};

export default useGame;
