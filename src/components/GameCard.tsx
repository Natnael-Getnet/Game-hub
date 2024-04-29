import { Game } from "@/hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { GameCritic } from "./GameCritic";
import getCroppedImage from "@/services/imageURL";
import { Emoji } from "./Emoji";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />

      <CardBody>
        <HStack paddingBottom={3} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <GameCritic score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};
