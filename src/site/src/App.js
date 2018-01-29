import React, { Component } from 'react';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  //withRouter
} from 'react-router-dom';
import { store } from './index.js';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    store.loggedin ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </div>
        </Router>
    );
  }
}

export default App;