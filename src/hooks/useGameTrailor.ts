import Trailor from "@/entities/Trailor";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Trailor>("/games");

const useGameTrailor = (gameId: number) => {
  const trailors = async () => await apiClient.getTrailor(gameId);

  return useQuery({
    queryKey: ["trailors", gameId],
    queryFn: trailors,
  });
};

export default useGameTrailor;
