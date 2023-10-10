import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre} : Props) => {
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
                <Button onClick={() => onSelectGenre(genre)} variant="link">{genre.name}</Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default GenreList;
