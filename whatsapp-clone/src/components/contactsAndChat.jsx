import React from "react";
import Header from "./header";
import SearchChat from "./searchChat";
import ArchivedChats from "./archivedChat";
import Msg from "./msg";

const ContactsAndChat = () => {
    const data = [
        {
            src: "",
            name: "Ahmed",
            msg: "Where are you?",
            time: "1:45",
        },
        {
            src: "",
            name: "Hasir",
            msg: "Hye",
            time: "3:00",
        },
        {
            src: "",
            name: "Muneeb",
            msg: "I have reached home.",
            time: "12:22",
        },
        {
            src: "",
            name: "Ahmed",
            msg: "Where are you?",
            time: "1:45",
        },
        {
            src: "",
            name: "Hasir",
            msg: "Hye",
            time: "3:00",
        },
        {
            src: "",
            name: "Muneeb",
            msg: "I have reached home.",
            time: "12:22",
        },
    ];
    return (
        <React.Fragment>
            <div className=" w-2/6">
                <Header />
                <SearchChat />
                <ArchivedChats />
                <Msg data={data} />
            </div>
        </React.Fragment>
    );
}

export default ContactsAndChat;