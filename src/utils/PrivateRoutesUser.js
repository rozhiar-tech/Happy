import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Gratitude from '../components/Gratitude';

function PrivateRoutesUser({ isUser }) {
  const navigate = useNavigate();

  return isUser ? (
    <Outlet />
  ) : (
    <Gratitude
      title="You Are Not Logged In as a User!"
      message="Please login first."
      onHandleClick={() => navigate('/login')}
      btnValue="Go To Login"
    />
  );
}

export default PrivateRoutesUser;
