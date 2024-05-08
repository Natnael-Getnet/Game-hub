import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwich } from "./ColorModeSwich";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={logo} className="h-14" />
      </Link>
      <SearchInput />
      <ColorModeSwich />
    </HStack>
  );
};
