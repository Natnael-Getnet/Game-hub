import useGenre, { Genre } from "@/hooks/useGenre";
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
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isPending } = useGenre();

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
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
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
