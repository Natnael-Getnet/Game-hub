import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwich } from "./ColorModeSwich";
import logo from "../assets/logo.webp";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} className="h-14" />
      <ColorModeSwich />
    </HStack>
  );
};
