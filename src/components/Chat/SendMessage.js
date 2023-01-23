import React from 'react';
import { getAuth } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth'
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import './chat.css';

import app from '../../firebase/firebaseinit';

const auth = getAuth(app);
const db = getFirestore(app);

function SendMessage({ scroll}) {
  const [msg, setMsg] = React.useState('');
  // const [user] = useAuthState(auth)

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(collection(db, 'messages'), {
      text: msg,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      sentTo: 'uid',
    });

    setMsg('');
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            style={{
              width: '78%',
              fontSize: '15px',
              fontWeight: '550',
              marginLeft: '5px',
              height: '40px',
              marginTop: '70px',
            }}
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            style={{
              width: '18%',
              fontSize: '15px',
              fontWeight: '550',
              margin: '4px 5% -13px 5%',
              maxWidth: '200px',

            }}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
