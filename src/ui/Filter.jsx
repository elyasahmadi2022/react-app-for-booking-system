import { useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";

export default function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentField = searchParams.get(filterField) || options.at(0).value;
  function handleFilter(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="mx-4 shadow-2xl rounded-full p-1.5 gap-2 flex ">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          active={currentField === option.value}
          onClick={() => handleFilter(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}
