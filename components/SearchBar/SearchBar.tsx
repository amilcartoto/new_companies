"use client";

const SearchBar = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center gap-4 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 text-sm border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-white focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 focus:outline-none"
        />
        <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
