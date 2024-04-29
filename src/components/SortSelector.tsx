import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => console.log("Selected")}>Relevance</MenuItem>
        <MenuItem onClick={() => console.log("Selected")}>Date added</MenuItem>
        <MenuItem onClick={() => console.log("Selected")}>Name</MenuItem>
        <MenuItem onClick={() => console.log("Selected")}>
          Release data
        </MenuItem>
        <MenuItem onClick={() => console.log("Selected")}>Popularity</MenuItem>
        <MenuItem onClick={() => console.log("Selected")}>
          Average rating
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
