import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User.js';
import { getUserList } from '../actions/userListActions.js';


class UserList extends Component {
    componentDidMount() {
        this.props.getUserList();
    }

    render() {
        let users = null;
        if (this.props.userList) {
            users = this.props.userList.map((user, idx) => {
                return (
                    <User key={idx}
                        user_id={user.user_id}
                        email={user.email}
                        prefix={user.prefix}
                        f_name={user.f_name}
                        l_name={user.l_name}
                        type={user.type}
                    />
                );
            })
        }

        return (
            <div>
                <h3>User List</h3>
                <div>
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
