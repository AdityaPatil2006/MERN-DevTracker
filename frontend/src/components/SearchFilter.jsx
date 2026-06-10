import { Filter, Search } from "lucide-react";

const SearchFilter = ({
  searchItem,
  setSearchItem,
  activeFilter,
  setActiveFilter,
}) => {
  const filters = ["All", "Active", "Planning", "Paused", "Completed"];

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300"
        />

        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search projects..."
          className="
            input
            w-full
            pl-12
            bg-[#27273A]
            border-purple-500/10
            rounded-xl
            text-white
            placeholder:text-gray-500
            focus:outline-none
            focus:ring-2
            focus:ring-purple-400
          "
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-3">
        <Filter size={18} className="text-purple-300" />

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl border text-sm transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-purple-500/20 border-purple-500 text-purple-300 shadow-md shadow-purple-500/10"
                  : "bg-[#27273A] border-white/5 text-gray-400 hover:border-purple-500/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
