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
            msg: "I reached home.",
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
    ];
    return (
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col">
            <Header />
            <SearchChat />
            <ArchivedChats />
            <Msg data={data} />
        </div>
    );
}

export default ContactsAndChat;
