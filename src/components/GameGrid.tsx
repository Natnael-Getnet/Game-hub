import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

export const GameGrid = () => {
  const { data, error, isPending, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <h1>{error.message}</h1>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >
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
              <Link to={`/games/${game.slug}`}>
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
