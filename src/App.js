import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store';
import './App.css';

// component imports 
import Register from './components/authentication/Register.js';


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              Home page
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;
