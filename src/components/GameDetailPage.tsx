import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandedText from "./ExpandedText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isError, isPending } = useGame(slug!);

  if (isPending) return <Spinner />;

  if (isError || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandedText>{game.description_raw}</ExpandedText>
    </>
  );
};

export default GameDetailPage;
