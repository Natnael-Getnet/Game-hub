import { GameQuery } from "@/App";
import { GAME_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

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
  const fetchData = async ({ pageParam }: { pageParam: number }) => {
    const res = await apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    });

    return res;
  };

  return useInfiniteQuery({
    queryKey: [GAME_CACHE_KEY, gameQuery],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGame;
