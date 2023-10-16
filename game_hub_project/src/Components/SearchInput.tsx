import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  minWidth?: number;
}
const SearchInput = ({ minWidth } : Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div style={{flex: "1"}}>
      
      <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) console.log(ref.current.value)
      }}>
        <InputGroup paddingX={3}>
          <InputLeftElement children={<BsSearch />}/>
          <Input ref={ref} borderRadius={20} focusBorderColor="blue.100" placeholder="Search Games..." variant="filled" />
        </InputGroup>
      </form>
      
    </div>
  )
}

export default SearchInput