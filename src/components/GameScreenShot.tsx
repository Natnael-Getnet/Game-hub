import useGameScreenShot from "@/hooks/useGameScreenShot";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const {
    data: screenshots,
    error,
    isError,
    isPending,
  } = useGameScreenShot(gameId);

  if (isError) throw error;

  if (isPending) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots.results.map((screenshot) => (
        <Image src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
