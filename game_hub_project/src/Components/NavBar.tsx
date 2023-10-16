import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <Show above="md">
        <HStack>
          <Image src={logo} boxSize={50} />
          <SearchInput onSearch={onSearch} paddingX={3} />
          <ColorModeSwitch />
        </HStack>
      </Show>
      <Show below="md">
        <HStack>
          <Image src={logo} boxSize={50} />
          <SearchInput onSearch={onSearch} paddingX={3} />
        </HStack>
      </Show>
    </>
  );
};

export default NavBar;
