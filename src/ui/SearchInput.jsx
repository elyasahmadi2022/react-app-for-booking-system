import Spinner from "./Spinner";

export default function SearchInput({ onChange, value, isSearching }) {
  return (
    <div className="mx-4">
      {isSearching && <Spinner />}{" "}
      <input
        onChange={(e) => onChange(e)}
        value={value}
        type="search"
        className="py-4  bg-stone-100 my-5 pl-4 w-full focus:outline-2 focus:outline-orange-400  focus:border-orange-400 shadow-2xs   shadow-stone-400"
        placeholder="Find Out Your Journey"
      />
    </div>
  );
}
