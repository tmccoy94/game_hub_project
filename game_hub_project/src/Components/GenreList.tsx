import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <div>
      {error && error}
      {isLoading ? (
        <Spinner />
      ) : (
        <List>
          {data.map((genre) => (
            <ListItem paddingY={1} key={genre.id}>
              <HStack>
                {
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                }
                <Text>{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default GenreList;
