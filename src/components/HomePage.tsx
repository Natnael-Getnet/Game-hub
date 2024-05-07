import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GameGrid } from "./GameGrid";
import { GameHeading } from "./GameHeading";
import { GenreList } from "./GenreList";
import { PlatformSelector } from "./PlatformSelector";
import { SortSelector } from "./SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `'main'`,
        lg: `'aside main'`, //above 1024
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading />
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
