import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User.js';
import { getUserList } from '../actions/userListActions.js';
import './styles/UserList.css'


class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }

        this.onUserListClick = this.onUserListClick.bind(this);
    }

    componentDidMount() {
        this.props.getUserList();
    }

    onUserListClick() {
        this.setState({isOpen: !this.state.isOpen});
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
                <h3>User List</h3>
                <button onClick={this.onUserListClick}>{this.state.isOpen ? "hide" : "show"}</button>
                <div className={this.state.isOpen ? "" : "hidden"}>
                    {users}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userList: state.users.userList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserList: () => {
            dispatch(getUserList());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserList);
