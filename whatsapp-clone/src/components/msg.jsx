import React from "react";
import profileIcon from "../images/profileIcon.jpg";


const Msg = (props) => {
    return (
        <React.Fragment>
            {props.data.map((e) => {
                return (
                    <div>
                        <div className="flex pt-3 pb-3 pr-5 bg-white cursor-pointer hover:bg-gray-100">
                            <div>
                                <img src={profileIcon} className="rounded-full w-14 h-14 ml-2 mr-3" alt="user img" />
                            </div>
                            <div>
                                <h2 className="text-md font-semibold">{e.name}</h2>
                                <p className=" text-xs mt-2">{e.msg}</p>
                            </div>
                            <div className="ml-auto">
                                <h4>{e.time}</h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}

        </React.Fragment>
    );
}

export default Msg;