import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack display="flex" justifyContent="space-between">
      <Image src={logo} boxSize={50} />
      <Text> This is the nav</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
