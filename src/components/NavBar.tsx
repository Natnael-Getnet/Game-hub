import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwich } from "./ColorModeSwich";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src="logoipsum-332.svg" />
      <ColorModeSwich />
    </HStack>
  );
};
