import React from "react";
import MenuIcon from "./profileAndIcons/menuIcon";
import NewChatIcon from "./profileAndIcons/newChatIcon";
import ProfileImg from "./profileAndIcons/profileImg";
import StatusIcon from "./profileAndIcons/statusIcon";
import GroupIcon from "./profileAndIcons/groupIcon";

const Header = () => {
    return (
        <div className="bg-gray-100 p-2 md:p-3 lg:p-4 xl:p-5 flex justify-between items-center">
            <div className="hidden md:block">
                <ProfileImg />
            </div>
            <div className="flex space-x-3">
                <GroupIcon />
                <StatusIcon />
                <NewChatIcon />
                <MenuIcon />
            </div>
        </div>
    );
}

export default Header;
