import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwich } from "./ColorModeSwich";
import logo from "../assets/logo.webp";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} className="h-14" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwich />
    </HStack>
  );
};
