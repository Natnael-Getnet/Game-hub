import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/services/imageURL";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

export const GenreList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data, error, isPending } = useGenres();

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
                  onClick={() => onSelectedGenre(genre)}
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
