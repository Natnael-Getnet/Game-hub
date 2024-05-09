import useGameTrailor from "@/hooks/useGameTrailor";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailor = ({ gameId }: Props) => {
  const { data: trailor, error, isError, isPending } = useGameTrailor(gameId);

  console.log("trailor.............................", trailor);

  if (isError) throw error;

  if (isPending) return <Spinner />;

  const firstTrailor = trailor?.results[0];

  console.log("firstTrailor.....................", firstTrailor);

  return firstTrailor ? (
    <video
      poster={firstTrailor.preview}
      src={firstTrailor.data[480]}
      controls
    />
  ) : null;
};

export default GameTrailor;
