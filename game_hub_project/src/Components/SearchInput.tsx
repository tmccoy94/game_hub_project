import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (searchText: string) => void;
  minWidth?: number;
  paddingX?: number;
}
const SearchInput = ({ onSearch, minWidth, paddingX }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div style={{ flex: "1" }}>
      <form
        id="SearchForm"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup paddingX={paddingX}>
          <InputLeftElement
            paddingLeft={paddingX ? paddingX * 2 : paddingX}
            children={<BsSearch />}
          />
          <Input
            name="gameSearch"
            ref={ref}
            borderRadius={20}
            focusBorderColor="blue.100"
            placeholder="Search Games..."
            variant="filled"
          />
        </InputGroup>
      </form>
    </div>
  );
};

export default SearchInput;
