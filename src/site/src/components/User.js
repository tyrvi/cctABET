import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_TYPES } from '../actions/loginActions.js';


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            email: this.props.email,
            type: this.props.type //? 'Standard' : 'Admin'
        }

        this.onUserDelete = this.onUserDelete.bind(this);
        this.onUserUpdate = this.onUserUpdate.bind(this);
    }

    onUserDelete() {
        // TODO: add confirmation of user delete
    }

    onUserUpdate() {
        // TODO: add confirmation of user update`
    }

    // TODO: add function call for deleting a user
    //       add button for editing a user
    render() {
        return (
            <div>
                <input type="text" value={this.state.username}
                    onChange={event => this.setState({username: event.target.value})} />
                <input type="text" value={this.state.email}
                    onChange={event => this.setState({email: event.target.value})}/>
                <select value={this.state.type}
                    onChange={event => this.setState({type: event.target.value})} >
                    <option value={USER_TYPES.STANDARD_USER}>Standard</option>
                    <option value={USER_TYPES.ADMIN_USER}>Admin</option>
                </select>
                <button onClick={this.onUserUpdate}>Update</button>
                <button onClick={this.onUserDelete}>Delete</button>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(User);
