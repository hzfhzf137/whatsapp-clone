import React from "react";
import whatsappImg from "../images/whatsapp-web.jpg";

const Conversation = () => {
    return (
        <React.Fragment>
            <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
                <div className="w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
                    <img src={whatsappImg} alt="whatsapp img" />
                    <div className="text-center">
                        <h1 className="font-semibold text-lg text-gray-600 mt-2 mb-1">Whatsapp Web</h1>
                        <p className="text-sm text-gray-600">Send and receive messages without keeping your phone online.</p>
                        <p className="text-sm text-gray-600">Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Conversation;
