import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './Login';
import {useStateValue} from './components/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {

    return () => {
      //Any cleanup activity here.
    }
  }, []);

  console.log("User is >>> ", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
