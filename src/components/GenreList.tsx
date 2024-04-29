import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImage from "@/services/imageURL";
import {
  Button,
  HStack,
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
  const { data, error, isLoading } = useGenre();

  if (error.length) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius="5px"
                src={getCroppedImage(genre.image_background)}
                boxSize="32px"
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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
  );
};
