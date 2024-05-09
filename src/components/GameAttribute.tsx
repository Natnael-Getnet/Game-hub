import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import Game from "@/entities/Game";
import { GameCritic } from "./GameCritic";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem
        heading="Platforms"
        children={[
          game.parent_platforms.map(({ platform }, index) => (
            <Text key={index}>{platform.name}</Text>
          )),
        ]}
      />

      <DefinitionItem
        heading="Metascore"
        children={<GameCritic score={game.metacritic} />}
      />

      <DefinitionItem
        heading="Genres"
        children={[
          game.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>),
        ]}
      />

      <DefinitionItem
        heading="Publishers"
        children={[
          game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          )),
        ]}
      />
    </SimpleGrid>
  );
};

export default GameAttribute;
