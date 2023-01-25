import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Gratitude from '../components/Gratitude';

function PrivateRoutesTherapist({ isTherapist }) {
  const navigate = useNavigate();

  return isTherapist ? (
    <Outlet />
  ) : (
    <Gratitude
      title="You Are Not Logged In as a Therapist!"
      message="Please login first."
      onHandleClick={() => navigate('/login')}
      btnValue="Go To Login"
    />
  );
}

export default PrivateRoutesTherapist;
