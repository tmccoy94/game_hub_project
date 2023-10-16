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
import { BsChevronDown } from "react-icons/bs";
// import { BiSolidChevronDownCircle } from "react-icons/bi";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  width?: number | string;
}

const PlatformsDropdownSelector = ({ onSelectPlatform, width }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <>
      <Menu>
        <MenuButton
          marginY={1}
          as={Button}
          rightIcon={<BsChevronDown />}
          width={width}
        >
          Select Platform
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
