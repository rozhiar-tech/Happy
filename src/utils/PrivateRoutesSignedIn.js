import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Gratitude from '../components/Gratitude';

function PrivateRoutesSignedIn({ isAuth }) {
  const navigate = useNavigate();

  return isAuth ? (
    <Outlet />
  ) : (
    <Gratitude
      title="You Are Not Logged In!"
      message="Please sign in first."
      onHandleClick={() => navigate('/login')}
      btnValue="Go To Login"
    />
  );
}

export default PrivateRoutesSignedIn;
