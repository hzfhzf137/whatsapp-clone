import React from "react";
import SearchIcon from "./profileAndIcons/searchIcon";
import FilterIcon from "./profileAndIcons/filterIcon";

const SearchChat = () => {
    return (
        <div className="bg-white mt-2 p-2 md:p-3 flex items-center">
            <div className="bg-gray-100 w-full md:w-3/4 rounded-md flex items-center md:ml-5 pl-2">
                <SearchIcon />
                <input className="h-8 w-full md:w-11/12 outline-none border-none bg-gray-100 text-xs md:text-sm pl-2" type="search" placeholder="Search or start new chat" />
            </div>
            <FilterIcon />
        </div>
    );
}

export default SearchChat;
