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
}

export const GenreList = ({ onSelectedGenre }: Props) => {
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
              <Button variant="link" onClick={() => onSelectedGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};
