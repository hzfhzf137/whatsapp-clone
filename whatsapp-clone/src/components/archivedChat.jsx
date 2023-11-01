import React from "react";
import ArchivedLogo from "./profileAndIcons/archivedLogo"

const ArchivedChats=()=>
{
    return(
        <React.Fragment>
            <div className="pl-5 pt-2 pb-2 cursor-pointer hover:bg-gray-100">
                <ArchivedLogo/>
                <h1 className=" ml-5 inline font-semibold">Archived</h1>
            </div>
            <hr />
        </React.Fragment>
    );
}

export default ArchivedChats;