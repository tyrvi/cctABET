import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_TYPES } from '../actions/loginActions.js';
import { adminUpdateUser, adminDeleteUser } from '../actions/adminActions.js';


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            email: this.props.email,
            type: this.props.type,
            editing: false,
        }

        this.onUserDelete = this.onUserDelete.bind(this);
        this.onUserUpdate = this.onUserUpdate.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onUserDelete() {
        // TODO: add confirmation of user delete
        console.log("user being deleted");

        // this.props.deleteUser(this.state.email);

        // TODO: add refetching of User List

    }

    onUserUpdate() {
        // TODO: add confirmation of user update`
        console.log("user being updated");

        // this.props.updateUser(
        //     this.state.username,
        //     this.state.email,
        //     this.state.type
        // );

        this.setState({editing: !this.state.editing});

        // TODO: add refetching of User List
    }

    onEdit() {
        this.setState({editing: !this.state.editing});
    }

    onEditCancel() {
        this.setState({
            username: this.props.username,
            email: this.props.email,
            type: this.props.type,
            editing: false,
        })
    }

    render() {
        if (!this.state.editing) {
            return (
                <div>
                    <div>Username: {this.state.username}</div>
                    <div>Email: {this.state.email}</div>
                    <div>User Type: {this.state.type ? "Standard" : "Admin"}</div>
                    <button onClick={this.onEdit}>Edit</button>
                    <button onClick={this.onUserDelete}>Delete</button>
                </div>
            );
        } else {
            return (
                <div>
                    <input type="text" value={this.state.username}
                        onChange={event => this.setState({username: event.target.value})} />
                    <input type="text" value={this.state.email}
                        onChange={event => this.setState({email: event.target.value})} />
                    <select value={this.state.type}
                        onChange={event => this.setState({type: event.target.value})} >
                        <option value={USER_TYPES.STANDARD_USER}>Standard</option>
                        <option value={USER_TYPES.ADMIN_USER}>Admin</option>
                    </select>
                    <button onClick={this.onUserUpdate}>Update</button>
                    <button onClick={this.onEditCancel}>Cancel</button>
                </div>
            );
        }

    }
}


const mapDispatchToProps = dispatch => {
    return {
        updateUser: (username, email, type) => {
            dispatch(adminUpdateUser(username, email, type));
        },
        deleteUser: (email) => {
            dispatch(adminDeleteUser(email));
        }
    }
}


export default connect(
    null,
    mapDispatchToProps
)(User);
