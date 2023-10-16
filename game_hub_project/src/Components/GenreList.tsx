import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <div>
      {error && error}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <List paddingTop={5}>
            {data.map((genre) => (
              <ListItem paddingY={1} key={genre.id}>
                <HStack>
                  {
                    <Image
                      boxSize="32px"
                      borderRadius={8}
                      objectFit="cover"
                      src={getCroppedImageUrl(genre.image_background)}
                    />
                  }
                  <Button
                    colorScheme={genre.id === selectedGenre?.id ? "blue" : ""}
                    onClick={() => onSelectGenre(genre)}
                    variant="link"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default GenreList;
