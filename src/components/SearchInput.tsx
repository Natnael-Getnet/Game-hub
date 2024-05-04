import useGameQueryStore from "@/store";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setsearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setsearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games ..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};
