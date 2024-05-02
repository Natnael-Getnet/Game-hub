import { GameQuery } from "@/App";
import useGame from "@/hooks/useGames";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <h1>{error.message}</h1>;

  return (
    <Box paddingX={5}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        border="10px"
        spacing={6}
        overflow="hidden"
      >
        {isPending &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          disabled={isFetchingNextPage}
          marginTop={2}
          onClick={() => {
            fetchNextPage();
          }}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )}
    </Box>
  );
};
