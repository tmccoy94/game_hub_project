import { HStack, Image, Text, useColorMode, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useEffect } from "react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack display="flex" justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <Text> This is the nav</Text>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Switch>
    </HStack>
  );
};

export default NavBar;
