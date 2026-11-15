function SearchBox({ query, onQueryChange }) {
  return (
    <div className="p-2 mb-4">
      <input
        type="text"
        className="w-72 sm:w-96 rounded-md p-1 text-slate-700 bg-gray-50"
        placeholder="Search user...."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
