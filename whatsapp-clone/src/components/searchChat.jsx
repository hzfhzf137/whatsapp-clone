import React from "react";
import SearchIcon from "./profileAndIcons/searchIcon"
import FilterIcon from "./profileAndIcons/filterIcon";

const SearchChat=()=>
{
    return(
        <React.Fragment>
            <div className="bg-white mt-2 flex">
                <div className="bg-gray-100 w-3/4 rounded-md ml-5 pl-2 ">
                <SearchIcon/>
                <input className="h-8 w-11/12 outline-none border-none bg-gray-100 placeholder: text-xs pl-2" type="search" placeholder="Search or start new chat" />
                </div>
                <FilterIcon/>
            </div>
            <hr className="mt-2" />
        </React.Fragment>
    );
}

export default SearchChat;