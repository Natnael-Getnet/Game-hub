import usePlatform from "@/hooks/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatform();

  if (error.length) return null;
  if (isLoading) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((platform) => {
          return <MenuItem key={platform.id}>{platform.name}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};
