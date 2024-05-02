import { GameQuery } from "@/App";
import { GAME_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
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
  const fetchData = async ({ pageParam }: { pageParam: number }) => {
    const res = await apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    });

    console.log(res);

    return res;
  };

  return useInfiniteQuery({
    queryKey: [GAME_CACHE_KEY, gameQuery],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      return await apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGame;
