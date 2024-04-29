import usePlatform, { Platform } from "@/hooks/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onselectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
export const PlatformSelector = ({
  onselectedPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error, isLoading } = usePlatform();

  if (error.length) return null;
  if (isLoading) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => {
          return (
            <MenuItem
              onClick={() => {
                onselectedPlatform(platform);
              }}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
