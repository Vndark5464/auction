// Components/Notification.js

import React from 'react';

function Notification({ notification }) {
  return (
    <div className="notification" role="alert">
      <p>{notification.message}</p>
      <span>{notification.createdAt}</span>
    </div>
  );
}

export default Notification;