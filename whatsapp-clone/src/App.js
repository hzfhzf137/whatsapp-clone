import React from 'react'
import ContactsAndChat from './components/contactsAndChat';
import Conversation from './components/conversation';


function App() {
  return (
    <React.Fragment>
      <div className='flex'>
        <ContactsAndChat/>
        <Conversation/>
      </div>
    </React.Fragment>
    
  );
}

export default App;
