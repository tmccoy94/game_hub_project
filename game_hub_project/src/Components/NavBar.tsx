import { HStack, Image, Text, useColorMode, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useEffect } from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack display="flex" justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <Text> This is the nav</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
