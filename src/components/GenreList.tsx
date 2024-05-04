import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/imageURL";
import useGameQueryStore from "@/store";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

export const GenreList = () => {
  const { data, error, isPending } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;
  if (isPending) return <Spinner />;

  return (
    <>
      <Heading as="h1" fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  objectFit="cover"
                  borderRadius="5px"
                  src={getCroppedImage(genre.image_background)}
                  boxSize="32px"
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                  variant="link"
                  onClick={() => setSelectedGenreId(genre.id)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
