import React from "react";
import MenuIcon from "./profileAndIcons/menuIcon";
import NewChatIcon from "./profileAndIcons/newChatIcon";
import ProfileImg from "./profileAndIcons/profileImg";
import StatusIcon from "./profileAndIcons/statusIcon"
import GroupIcon from "./profileAndIcons/groupIcon"

const Header = () => {
    return (
        <React.Fragment>
            <div className="bg-gray-100 pt-3 pl-5 pr-5 pb-3 flex justify-between">
                <div>
                    <ProfileImg/>
                </div>
                <div>
                    <GroupIcon/>
                    <StatusIcon/>
                    <NewChatIcon/>
                    <MenuIcon/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;