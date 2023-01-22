/* eslint-disable no-restricted-globals */
import React from 'react';
import { getAuth } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore, collection, onSnapshot,query,orderBy,limit } from 'firebase/firestore';
import './chat.css';

import app from '../../firebase/firebaseinit';
import SendMessage from './SendMessage';

const auth = getAuth(app);
const db = getFirestore(app);

const Chat = () => {
  // const [user] = useAuthState(auth);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(25));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagess = [];
      querySnapshot.forEach((doc) => {
        messagess.push(doc.data());
      });
      setMessages(messagess);
    });

    return unsubscribe;
  }, [messages]);



  return (
    <div>
      <div className="msgs">
      {messages.map(({ id, text, photoURL, uid }) => (
      <div>
          <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
          </div>
      </div>
  ))}
      </div>
      <SendMessage scroll={scroll}/>
      <div ref={scroll} />
    </div>
  );
};

export default Chat;
