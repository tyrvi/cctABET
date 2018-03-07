import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_TYPES } from '../actions/loginActions.js';
import User from './User.js';


class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: [
                {
                    username: 'bob',
                    email: 'bob@lipscomb.edu',
                    type: USER_TYPES.STANDARD_USER,
                },
                {
                    username: 'THE SENATE',
                    email: 'senate@lipscomb.edu',
                    type: USER_TYPES.ADMIN_USER,
                },
                {
                    username: 'hello there',
                    email: 'generalkenobi@lipscomb.edu',
                    type: USER_TYPES.STANDARD_USER,
                }
            ]
        }
    }

    render() {

        const users = this.state.userList.map((user, idx) => {
            return (
                <User key={idx} username={user.username} email={user.email}
                    type={user.type} />
            );
        })

        return (
            <div>
                <h3>User List</h3>
                {users}
            </div>
        );
    }
}

export default connect(
    null,
    null
)(UserList);
