import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";
interface Props {
  minWidth?: number;
}
const SearchInput = ({ minWidth } : Props) => {
  return (
    <div><InputGroup>
    <InputLeftElement children={<BsSearch />}/>
    <Input borderRadius={20} minW={minWidth} focusBorderColor="blue.100" placeholder="Search Games..." variant="filled" />
    </InputGroup></div>
  )
}

export default SearchInput