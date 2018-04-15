import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User.js';
import {
    getUserList,
    userListFilterChange,
    userListShowHide,
    createUserEmailChange,
    createUserPassChange,
    createUserFNameChange,
    createUserLNameChange,
    createUserPrefixChange,
    createUserTypeChange,
    createUserClear,
} from '../actions/userAdminActions.js';
import './styles/UserAdmin.css'
import { USER_TYPES } from '../actions/loginActions.js';


class UserAdmin extends Component {
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
        if (this.props.filter.email) {
            this.props.getUserList(this.props.filter.email);
        } else {
            this.props.getUserList();
        }
    }

    render() {
        let users = null;
        if (this.props.userList) {
            users = this.props.userList.map((user, idx) => {
                return (
                    <User key={user.user_id}
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
                        <input type="text" value={this.props.userCreate.email}
                            onChange={event => this.props.updateUserCreateEmail(event.target.value)}
                            placeholder="email"/>
                        <input type="text" value={this.props.userCreate.pass}
                            onChange={event => this.props.updateUserCreatePass(event.target.value)}
                            placeholder="password"/>
                        <input type="text" value={this.props.userCreate.f_name}
                            onChange={event => this.props.updateUserCreateFName(event.target.value)}
                            placeholder="first name"/>
                        <input type="text" value={this.props.userCreate.l_name}
                            onChange={event => this.props.updateUserCreateLName(event.target.value)}
                            placeholder="last name"/>
                        <input type="text" value={this.props.userCreate.prefix}
                            onChange={event => this.props.updateUserCreatePrefix(event.target.value)}
                            placeholder="prefix"/>
                        <select value={this.props.userCreate.type}
                            onChange={event => this.props.updateUserCreateType(event.target.value)}>
                            <option value={USER_TYPES.STANDARD_USER}>Standard</option>
                            <option value={USER_TYPES.ADMIN_USER}>Admin</option>
                        </select>
                        <button onClick={this.onCreateUserClick}>Create User</button>
                        <button onClick={this.props.userCreateClear}>clear</button>
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
                        <div className={this.props.isOpen ? "listBox" : "hidden"}>
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
        isOpen: state.users.showHide,
        userCreate: state.users.userCreate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserList: (email) => {
            dispatch(getUserList(email));
        },
        updateFilter: (email) => {
            dispatch(userListFilterChange(email));
        },
        showHide: () => {
            dispatch(userListShowHide())
        },
        userCreateClear: () => {
            dispatch(createUserClear())
        },
        updateUserCreateEmail: (email) => {
            dispatch(createUserEmailChange(email))
        },
        updateUserCreatePass: (pass) => {
            dispatch(createUserPassChange(pass))
        },
        updateUserCreateFName: (f_name) => {
            dispatch(createUserFNameChange(f_name))
        },
        updateUserCreateLName: (l_name) => {
            dispatch(createUserLNameChange(l_name))
        },
        updateUserCreatePrefix: (prefix) => {
            dispatch(createUserPrefixChange(prefix))
        },
        updateUserCreateType: (type) => {
            dispatch(createUserTypeChange(type))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserAdmin);
