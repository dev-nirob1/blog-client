import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

    const handleSearch = e => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <form onSubmit={handleSearch}  className="lg:w-[576px] flex items-center justify-center">
            <input className="p-2 border flex-grow outline-none rounded-l-md" type="search" placeholder="search" />
            <button type="submit" className="bg-gray-100 border-y border-r py-3 px-4 rounded-r-md"> <FaSearch /></button>
        </form>
    );
};

export default SearchBar;