import { useState } from 'react';

const Settings = (props) => {
  const { subscribed } = props;
  return (
    <div>
      <h2>Settings</h2>
      {subscribed ? (
        <p>You are currently subscribed to the newsletter</p>
      ) : (
        <p>You are not subscribed</p>
      )}

    </div>
  );
}

export default Settings;
