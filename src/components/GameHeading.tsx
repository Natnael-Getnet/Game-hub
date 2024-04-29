import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading paddingY={5} as={"h1"} fontSize="5xl">
      {heading}
    </Heading>
  );
};
