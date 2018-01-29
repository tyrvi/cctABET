import React, { Component } from 'react';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import './App.css';
import { connect } from 'react-redux';


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     store.loggedin ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )

class App extends Component {
  render() {
    const Home = this.props.isLoggedIn ? 
      <div><Dashboard {...this.props} /></div> : 
      <div><Login {...this.props} /></div>;
      
    return (
      <div>
        {Home}
      </div>        
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
  }
}

export default connect(
  mapStateToProps
)(App);