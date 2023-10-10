import { useColorMode, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      id="themeSwitch"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    >
      {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
    </Switch>
  );
};

export default ColorModeSwitch;
