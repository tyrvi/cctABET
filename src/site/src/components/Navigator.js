import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Menu from './Menu.js';
import Dashboard from './Dashboard.js';
import Admin from './Admin.js';
import Form from './Form.js';
import { authCheckLoggedIn } from '../actions/loginActions.js';
import { PAGES } from '../actions/pageActions.js';

class Navigator extends Component {


    componentDidMount() {
        this.props.authCheckLoggedIn();
    }

    render() {
        // const Home = this.props.loggedIn ?
        //     <div><Dashboard /></div> :
        //     <div><Login /></div>;

        let page = null;
        console.log(this.props.currentPage);
        switch(this.props.currentPage) {
            case PAGES.LOGIN:
                return (
                    <div>
                        <Login />
                    </div>
                );
            case PAGES.DASHBOARD:
                return (
                    <div>
                        <Menu />
                        <Dashboard />
                    </div>
                );
            case PAGES.ADMIN:
                return (
                    <div>
                        <Menu />
                        <Admin />
                    </div>
                );
            case PAGES.FORM:
                return (
                    <div>
                        <Menu />
                        <Form />
                    </div>
                );
            default:
                return null;
        }

        return null

        // return (
        //     <div id="Navigator">
        //         {Home}
        //     </div>
        // );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.login.loggedIn,
        currentPage: state.page.currentPage
    };
}

const mapDispatchToProps = dispatch => {
    return {
        authCheckLoggedIn: () => {
            dispatch(authCheckLoggedIn())
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigator);
