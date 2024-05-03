import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading paddingY={5} as={"h1"} fontSize="5xl">
      {heading}
    </Heading>
  );
};
