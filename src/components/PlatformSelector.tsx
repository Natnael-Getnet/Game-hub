import usePlatform, { Platform } from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onselectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
export const PlatformSelector = ({
  onselectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error, isPending } = usePlatform();
  const platform = data?.results.find((p) => p.id === selectedPlatformId);

  if (error) return null;
  if (isPending) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformId ? platform?.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => {
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
