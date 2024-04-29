import useGenre from "@/hooks/useGenre";
import getCroppedImage from "@/services/imageURL";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

export const GenreList = () => {
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};
