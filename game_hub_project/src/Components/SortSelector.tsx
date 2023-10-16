import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (name: string) => void;
  width?: number | string;
}

const SortSelector = ({ onSelectSort, width }: Props) => {
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  // if (error) return null;

  return (
    <>
      <Menu>
        <MenuButton
          marginY={3}
          as={Button}
          rightIcon={<BsChevronDown />}
          width={width}
          // marginX={2}
        >
          Sort By
        </MenuButton>
        <MenuList>
          {sortOptions.map((sortOption) => (
            <MenuItem
              // onClick={() => onSelectsortOption(sortOption)}
              key={sortOption.label}
              onClick={() => {
                console.log("Selected sort option:", sortOption.value);
                onSelectSort(sortOption.value);
              }}
            >
              {sortOption.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
