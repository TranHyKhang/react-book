import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TopMenu from './components/TopMenu';

// pages
import Books from './pages/books';
import SignIn from './pages/signIn';

// Context
import {CartProvider} from './context/cart';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <TopMenu />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/books" exact>
              <Books/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}


