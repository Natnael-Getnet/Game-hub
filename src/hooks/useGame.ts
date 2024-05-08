import ApiClient from "@/services/api-client";
import { Game } from "../entities/Game";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Game>("/games");

const fetchGame = (id: number | string) => {
  return apiClient.get(id);
};

const useGame = (slug: number | string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => fetchGame(slug),
  });

export default useGame;
