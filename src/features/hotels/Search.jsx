import { useState } from "react";
import Box from "../../ui/Box";
import Filter from "../../ui/Filter";
import Input from "../../ui/Input";
import SearchInput from "../../ui/SearchInput";
import SearchItem from "../../ui/SearchItem";
import { useSearch } from "./useSearch";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const { isSearching, data } = useSearch();
  function handleChange(e){
    setInputValue(e.target.value);
    searchParams.set('country', inputValue);
    setSearchParams(searchParams);
  } 
  return (
    <article>
      <Box>
        <SearchInput
          onChange={handleChange}
          value={inputValue}
          isSearching={isSearching}
        />
        <Filter
          options={[
            { value: "all", label: "all" },
            { value: "recent", label: "recent" },
            { value: "top-visited", label: "top-visited" },
          ]}
          filterField="destinations"
        />
      </Box>

      <Box>
        {data?.map((res) => (
          <Box key={res.id}>
            <SearchItem>{res.address}</SearchItem>
          </Box>
        ))}
      </Box>
    </article>
  );
}
