import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store';

// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// component imports 
import Register from './components/authentication/Register.js';
import VerifyEmail from './components/authentication/VerifyEmail.js';

// CSS
import './App.css';


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>

            {/* Registration  */}
            <Route path="/register">
              <Container>
                <Register />
              </Container>
            </Route>

            {/* Verify Email Address */}
            <Route path="/verify-email">
              <Container>
                <VerifyEmail />
              </Container>
            </Route>

            {/* Home */}
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
