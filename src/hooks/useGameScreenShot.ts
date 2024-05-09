import ScreenShot from "@/entities/ScreenShot";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<ScreenShot>("/games");

const useGameScreenShot = (gameId: number) => {
  const screenShoots = async () => await apiClient.getScreenShoot(gameId);

  console.log(screenShoots());

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: screenShoots,
  });
};

export default useGameScreenShot;
