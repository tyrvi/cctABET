import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import {
    adminCreateDB,
    insertTestData,
    adminCreateUser
} from '../actions/adminActions.js';
import { USER_TYPES } from '../actions/loginActions.js';
import UserList from './UserList.js';


class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resetDB: '',
            testDataDB: '',
            createUser: {
                user: '',
                pass: '',
                email: '',
                type: USER_TYPES.STANDARD_USER,
            },
        }

        this.onResetDBClick = this.onResetDBClick.bind(this);
        this.onInsertDataClick = this.onInsertDataClick.bind(this);
        this.onCreateUserClick = this.onCreateUserClick.bind(this);
    }

    onResetDBClick() {
        this.props.adminCreateDB(this.state.resetDB);
        this.setState({resetDB: ''});
    }

    onInsertDataClick() {
        this.props.insertTestData(this.state.testDataDB);
        this.setState({testDataDB: ''});
    }

    onCreateUserClick() {
        // TODO: create actions for calling create user API
        this.props.createUser(
            this.state.createUser.user,
            this.state.createUser.pass,
            this.state.createUser.email,
            this.state.createUser.type,
        );

        this.setState({createUser: Object.assign({}, this.state.createUser, {
            user: '',
            pass: '',
            email: '',
            type: USER_TYPES.STANDARD_USER,
        })});
    }

    render() {
        return (
            <div id="Admin">
                <h1>UNLIMITED POWAH!!!</h1>
                <div>
                    <div className={this.props.requestError ? "visible failText" : "hidden"}>
                        Error: {this.props.requestError}
                    </div>
                    <div className={this.props.requestMessage ? "visible successText" : "hidden"}>
                        Success: {this.props.requestMessage}
                    </div>
                </div>
                <div>
                    <input type="text" value={this.state.resetDB}
                        onChange={event => this.setState({ resetDB: event.target.value })}
                        placeholder="Database Name" />
                    <button onClick={this.onResetDBClick}>Reset Database</button>
                </div>
                <div>
                    <input type="text" value={this.state.testDataDB}
                        onChange={event => this.setState({ testDataDB: event.target.value })}
                        placeholder="Database Name" />
                    <button onClick={this.onInsertDataClick}>Insert Test Data</button>
                </div>
                <div>
                    <input type="text" value={this.state.createUser.user}
                        onChange={event => this.setState({createUser: Object.assign({}, this.state.createUser, {
                            user: event.target.value
                        })})}
                        placeholder="Username" />
                    <input type="text" value={this.state.createUser.email}
                        onChange={event => this.setState({createUser: Object.assign({}, this.state.createUser, {
                            email: event.target.value
                        })})}
                        placeholder="Email" />
                    <input type="text" value={this.state.createUser.pass}
                        onChange={event => this.setState({createUser: Object.assign({}, this.state.createUser, {
                            pass: event.target.value
                        })})}
                        placeholder="Password" />
                    <select value={this.state.createUser.type}
                    onChange={event => this.setState({createUser: Object.assign({}, this.state.createUser, {
                        type: event.target.value
                    })})}>
                        <option value={USER_TYPES.STANDARD_USER}>Standard</option>
                        <option value={USER_TYPES.ADMIN_USER}>Admin</option>
                    </select>
                    <button onClick={this.onCreateUserClick}>Create User</button>
                </div>
                <UserList />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        adminCreateDB: (db) => {
            dispatch(adminCreateDB(db));
        },
        insertTestData: (db) => {
            dispatch(insertTestData(db))
        },
        createUser: (user, pass, email, type) => {
            dispatch(adminCreateUser(user, pass, email, type))
        },
    }
}

const mapStateToProps = state => {
    return {
        requestMessage: state.adminReducer.requestMessage,
        requestError: state.adminReducer.requestError,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
