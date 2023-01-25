import React from 'react';
import { getAuth } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth'
import {
  arrayUnion,
  doc,
  getFirestore, Timestamp, updateDoc,
} from 'firebase/firestore';
import './chat.css';
import { v4 as uuid } from "uuid";
import app from '../../firebase/firebaseinit';


const auth = getAuth(app);
const db = getFirestore(app);

function SendMessage() {
  const [msg, setMsg] = React.useState('');
  // const [user] = useAuthState(auth)

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
    await updateDoc(doc(db, "chats", "ufZXAFLasufUPKdntYiFcT4QvNW2Mrb92EjXeJRRHGC57swOzv0PoMm2"), {
      messages: arrayUnion({
        id: uuid(),
        text:msg,
        senderId: uid,
        date: Timestamp.now(),
      }),
    });

  
   
    setMsg('');
    // scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="flex flex-col px-20 gap-y-4 mb-14 md:text-left text-center">
        <h1 className="text-5xl ">We&#39;re here to help 24/7</h1>
        <p className="text-xl text-gray-700">
          Every therapist is a professional in the sphere and excited to work
          with you!
        </p>
      </div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg flex flex-col px-20 rounded-2xl   md:items-start md:justify-start items-center  justify-center">
          <textarea
            style={{
              width: '78%',
              fontSize: '18px',
              fontWeight: '550',
              marginLeft: '5px',
              height: '350px',
              marginTop: '20px',
              padding: '5px',
              border: '2px solid gray',
            }}
            placeholder="Please enter your question"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            style={{
              width: '18%',
              fontSize: '20px',
              fontWeight: '550',
              margin: '40px 5% 110px 0px',
              maxWidth: '200px',
              background: '#2193b0',
              padding: '10px 10px',
              borderRadius: '10px',
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
