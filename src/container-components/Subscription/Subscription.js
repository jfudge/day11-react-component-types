// Container components are where the logic is handled
// Generally a top level parent component
// But the overall idea is to keep your state management to
// a manageable handful of components
import { useState } from 'react';

// import our presentation components
import FancyButton from '../../presentation-components/FancyButton/FancyButton';
import Button from '../../presentation-components/Button/Button';

import Settings from '../Settings/Settings';

const Subscription = () => {
  // This container component will handle the subscription state of the app
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = () => {
    console.log('Thank you for subscribing!');
    setSubscribed(true);
  }

  const unsubscribe = () => {
    console.log('We\'re sorry to see you leave!');
    setSubscribed(false);
  }

  // You can pass the subscribed state to Settings but not to App (uni-directional data flow)
  return (
    <div>
      <h2>Your Subscription</h2>
      {subscribed ? (
        <>
          <p>You are already subscribed to our newsletter and getting great deals mailed directly to you!</p>
          <FancyButton
            bgColor="#9b0a0a"
            onClick={() => unsubscribe()}
          >
            Unsubscribe
          </FancyButton>
        </>
      ) : (
        <>
          <p>You should checkout our newsletter for all the latest deals!</p>
          <Button onClick={() => subscribe()}>Subscribe</Button>
        </>
      )}
      <hr/>
      <Settings subscribed={subscribed} />
    </div>
  );
};

export default Subscription;