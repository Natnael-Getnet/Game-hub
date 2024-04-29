import { Game } from "@/hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { GameCritic } from "./GameCritic";
import getCroppedImage from "@/services/imageURL";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />

      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <GameCritic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
