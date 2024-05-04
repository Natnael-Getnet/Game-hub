import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwich } from "./ColorModeSwich";
import logo from "../assets/logo.webp";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} className="h-14" />
      <SearchInput />
      <ColorModeSwich />
    </HStack>
  );
};
