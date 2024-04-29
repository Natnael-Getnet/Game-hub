import useGame from "@/hooks/useGames";
import { GameCard } from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "@/hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

export const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <h1>{error}</h1>}
      <SimpleGrid
        paddingY={3}
        paddingX={5}
        columns={{ sm: 1, md: 2, lg: 3 }}
        border="10px"
        spacing={3}
        overflow="hidden"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
