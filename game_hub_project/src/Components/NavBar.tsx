import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <>
    <Show above="md">
    <HStack>
      <Image src={logo} boxSize={50} />
      <SearchInput/>      
      <ColorModeSwitch />      
    </HStack>
    </Show>
    <Show below="md">
    <HStack >
      <Image src={logo} boxSize={50} />
      <SearchInput />  
    </HStack>
    </Show>
    </>
  );
};

export default NavBar;
