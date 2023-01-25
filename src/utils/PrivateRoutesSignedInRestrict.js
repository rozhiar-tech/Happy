import React from 'react';
import { Outlet } from 'react-router-dom';
import Gratitude from '../components/Gratitude';

function PrivateRoutesSignedInRestrict({ isAuth }) {
  return isAuth ? (
    <Gratitude
      title="You Are Already Logged In!"
      message="Please sign out first."
    />
  ) : (
    <Outlet />
  );
}

export default PrivateRoutesSignedInRestrict;
