import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import { adminCreateDB, insertTestData } from '../actions/adminActions.js';
import { USER_TYPES } from '../actions/loginActions.js';


class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resetDB: '',
            testDataDB: '',
            createUser: {
                user: '',
                email: '',
                pass: '',
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
        console.log("creating user");
        this.setState({createUser: Object.assign({}, this.state.createUser, {
            user: '',
            email: '',
            pass: '',
            type: USER_TYPES.STANDARD_USER,
        })});
    }

    render() {
        return (
            <div id="Admin">
                <h3>UNLIMITED POWAH!!!</h3>
                <div>
                    <input type="text" value={this.state.resetDB}
                        onChange={event => this.setState({ resetDB: event.target.value })}
                        placeholder="Database Name" />
                    <button onClick={this.onResetDBClick}>Reset Database</button>
                    <div className={this.props.createdDB ? "visible successText" : "hidden"}>
                        Success!
                    </div>
                    <div className={this.props.requestError && this.props.createDBResponse ? "visible failText" : "hidden"}>
                        Error: {this.props.requestError}
                    </div>
                </div>
                <div>
                    <input type="text" value={this.state.testDataDB}
                        onChange={event => this.setState({ testDataDB: event.target.value })}
                        placeholder="Database Name" />
                    <button onClick={this.onInsertDataClick}>Insert Test Data</button>
                    <div className={this.props.insertedTestData ? "visible successText" : "hidden"}>
                        Success!
                    </div>
                    <div className={this.props.requestError && this.props.insertTestResponse ? "visible failText" : "hidden"}>
                        Error: {this.props.requestError}
                    </div>
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
                    <button onClick={this.props.onCreateUserClick}>Create User</button>
                </div>
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
    }
}

const mapStateToProps = state => {
    return {
        isDoingRequest: state.adminReducer.isDoingRequest,
        createdDB: state.adminReducer.createdDB,
        insertedTestData: state.adminReducer.insertedTestData,
        requestError: state.adminReducer.requestError,
        createDBResponse: state.adminReducer.createDBResponse,
        insertTestResponse: state.adminReducer.insertTestResponse,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
