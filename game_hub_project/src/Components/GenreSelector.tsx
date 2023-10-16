import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  marginBottom?: number;
  width?: number | string;
}

const GenreList = ({
  onSelectGenre,
  selectedGenre,
  marginBottom,
  width,
}: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <div>
      {error && error}
      {isLoading ? (
        <Spinner />
      ) : (
        <Menu>
          <MenuButton
            width={width}
            marginBottom={marginBottom}
            as={Button}
            rightIcon={<BsChevronDown />}
          >
            Select Genre
          </MenuButton>
          <MenuList>
            {data.map((genre) => (
              <MenuItem onClick={() => onSelectGenre(genre)} key={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </div>
  );
};

export default GenreList;
