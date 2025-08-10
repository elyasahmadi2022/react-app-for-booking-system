import Spinner from "./Spinner";

export default function SearchInput({ onChange, value, isSearching }) {
  return (
    <div className="mx-4">
      {isSearching && <Spinner />}{" "}
      <input
        onChange={(e) => onChange(e)}
        value={value}
        type="search"
        className="py-3  bg-stone-100 my-5 pl-4 w-full focus:outline focus:outline-orange-300  focus:border-orange-300 shadow-lg placeholder:text-orange-300 placeholder:text-sm placeholder:capitalize placeholder:tracking-wide "
        placeholder="Find Out Your Journey"
      />
    </div>
  );
}
