import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandedText from "./ExpandedText";
import GameAttribute from "./GameAttribute";
import GameTrailor from "./GameTrailor";
import GameScreenShot from "./GameScreenShot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isError, isPending } = useGame(slug!);
  if (isPending) return <Spinner />;

  if (isError || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandedText>{game.description_raw}</ExpandedText>
        <GameAttribute game={game} />
      </GridItem>
      <GridItem>
        <GameTrailor gameId={game.id} />
        <GameScreenShot gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
