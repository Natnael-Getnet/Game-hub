import { GAME_CACHE_KEY } from "@/constants";
import ApiClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "@/store";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const fetchData = async ({ pageParam }: { pageParam: number }) => {
    return await apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    });
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

export default useGames;
