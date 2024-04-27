import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeSwich = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        color={"green"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark mode</Text>
    </HStack>
  );
};
