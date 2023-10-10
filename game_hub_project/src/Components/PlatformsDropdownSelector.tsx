import usePlatforms, { Platform } from "../hooks/usePlaforms";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { BiSolidChevronDownCircle } from "react-icons/bi";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformsDropdownSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <>
      <Menu>
        <MenuButton
          marginY={3}
          as={Button}
          rightIcon={<BiSolidChevronDownCircle />}
        >
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformsDropdownSelector;
