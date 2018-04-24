import React, { Component } from 'react';
import Navigator from './components/Navigator.js';
import Modal from './components/Modal.js';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <Navigator />
            </div>
        );
    }
}

export default connect(
    null,
    null
)(App);
