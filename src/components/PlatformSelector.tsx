import usePlatform from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data, error, isPending } = usePlatform();
  const platform = data?.results.find((p) => p.id === selectedPlatformId);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

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
                setSelectedPlatformId(platform.id);
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
