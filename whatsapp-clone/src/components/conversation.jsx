import React from "react";
import whatsappImg from "../images/whatsapp-web.jpg";

const Conversation = () => {
    return (
        <React.Fragment>
            <div className=" w-full h-[100vh] bg-gray-100 flex items-center justify-center ">
                <div>
                    <img  src={whatsappImg} alt="whatsapp img" />
                    <center>
                    <h1 className=" font-semibold text-lg text-gray-600 mt-2 mb-1">Whatsapp Web</h1>
                    <p className="text-sm text-gray-600">Send and recieve messages without keeping your phone online.</p>
                    <p className="text-sm text-gray-600">Use whatsapp on upto 4 link devices and 1 one phone at the same time.</p>
                    </center>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Conversation;