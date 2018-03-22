import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User.js';
import {
    getUserList,
    userListFilterChange,
    userListShowHide
} from '../actions/userListActions.js';
import './styles/UserList.css'
import { USER_TYPES } from '../actions/loginActions.js';


class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createUser: {
                user: '',
                pass: '',
                email: '',
                type: USER_TYPES.STANDARD_USER,
            }
        }

        this.onUserListClick = this.onUserListClick.bind(this);
        this.onFilterClick = this.onFilterClick.bind(this);
        this.onCreateUserClick = this.onCreateUserClick.bind(this);
    }

    componentDidMount() {
        this.props.getUserList();
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

    onUserListClick() {
        this.props.showHide();
    }

    onFilterClick() {
        this.props.getUserList(this.state.filter.email);
    }

    render() {
        let users = null;
        if (this.props.userList) {
            users = this.props.userList.map((user, idx) => {
                return (
                    <User key={idx}
                        user={user}
                    />
                );
            })
        }

        return (
            <div>
                <h3>Users</h3>
                <div>
                    <div>
                        <h4>Create User</h4>
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
                    <h4>User List</h4>
                    <div>
                        <h5>Filter</h5>
                            Email: <input value={this.props.filter.email}
                                        onChange={event => this.props.updateFilter(event.target.value)}
                                    />
                        <button onClick={this.onFilterClick}>Filter</button>
                    </div>
                    <div>
                        <button onClick={this.onUserListClick}>{this.props.isOpen ? "hide list" : "show list"}</button>
                        <div className={this.props.isOpen ? "" : "hidden"}>
                            {users}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userList: state.users.userList,
        filter: state.users.filter,
        isOpen: state.users.showHide
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserList: () => {
            dispatch(getUserList());
        },
        updateFilter: (email) => {
            dispatch(userListFilterChange(email));
        },
        showHide: () => {
            dispatch(userListShowHide())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserList);
