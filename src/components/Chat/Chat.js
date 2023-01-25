/* eslint-disable no-restricted-globals */
import React from 'react';
import { getAuth } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import {
  getFirestore,
  
  onSnapshot,
  
  
  
  doc,
} from 'firebase/firestore';
import './chat.css';

import app from '../../firebase/firebaseinit';
import SendMessage from './SendMessage';

const auth = getAuth(app);
const db = getFirestore(app);

const Chat = () => {
  // const [user] = useAuthState(auth);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    // eslint-disable-next-line no-shadow
    onSnapshot(doc(db, 'chats', 'ufZXAFLasufUPKdntYiFcT4QvNW2Mrb92EjXeJRRHGC57swOzv0PoMm2'), (doc) => {
      setMessages(doc.data().messages);
    });
  }, []);
  console.log(messages);

  return (
    <div>
      <div className="msgs">
        {messages.map(({ text, senderId }) => (
          <div>
            <div
              key={senderId}
              className={`msg ${
                senderId === auth.currentUser.uid ? 'sent' : 'received'
              }`}
            >
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll} />
    </div>
  );
};

export default Chat;
