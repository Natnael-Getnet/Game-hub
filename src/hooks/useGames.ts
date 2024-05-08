import { GAME_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "@/store";

export interface Game {
  id: number;
  background_image: string;
  name: string;
  description_raw: string;
  slug: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGame = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

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
    staleTime: ms("24h"),
  });
};

export default useGame;
