import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile/Profile';
import ProfileData from './Profile/user.json';

ReactDOM.render(
  <>
    <Profile data={ProfileData} />
  </>,
  document.getElementById('root'),
);
