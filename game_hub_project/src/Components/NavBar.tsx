import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <>
    <Show above="md">
    <HStack display="flex" justifyContent="space-between">
      <Image src={logo} boxSize={50} />
      <SearchInput minWidth={500}/>      
      <ColorModeSwitch />      
    </HStack>
    </Show>
    <Show below="md">
    <HStack display="flex" justifyContent="space-between">
      <Image src={logo} boxSize={50} />
      <SearchInput />  
    </HStack>
    </Show>
    </>
  );
};

export default NavBar;
