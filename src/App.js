// import logo from './logo.svg';
import './App.css';

import Subscription from './container-components/Subscription/Subscription';
import Settings from './container-components/Settings/Settings';


// If you need Setting and Subscription to both have access to the subscribed state located in
// the Subscription component, you might want to consider if the subscribed state belongs in the
// Subscription component. Maybe it makes more sense to put it in the nearest common parent (App.js)

function App() {
  // You can't pull subscribed from the Subcription component
  // const subscribed;
  return (
    <div className="app container">
      <h1>Component Organization</h1>
      <Subscription />
      {/* <hr/> */}
      {/* <Settings subscribed={subscribed} /> */}
    </div>
  );
}

export default App;
