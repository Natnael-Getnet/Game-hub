import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { GameGrid } from "./components/GameGrid";
import { GameHeading } from "./components/GameHeading";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //above 1024
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(genre) => {
              const genreId = genre.id;
              setGameQuery({ ...gameQuery, genreId });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onselectedPlatform={(platform) => {
                const platformId = platform.id;
                setGameQuery({ ...gameQuery, platformId });
              }}
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSortOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
