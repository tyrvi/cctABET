import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User.js';
import {
    getUserList,
    userListFilterChange,
    userListShowHide
} from '../actions/userListActions.js';
import './styles/UserList.css'


class UserList extends Component {
    constructor(props) {
        super(props);

        this.onUserListClick = this.onUserListClick.bind(this);
        this.onFilterClick = this.onFilterClick.bind(this);
    }

    componentDidMount() {
        this.props.getUserList();
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
                        <h5>User Filter</h5>
                            Email: <input value={this.props.filter.email}
                                        onChange={event => this.props.updateFilter(event.target.value)}
                                    />
                        <button onClick={this.onFilterClick}>Filter</button>
                    </div>
                    <div>
                        <h5>User List</h5>
                        <button onClick={this.onUserListClick}>{this.props.isOpen ? "hide" : "show"}</button>
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
