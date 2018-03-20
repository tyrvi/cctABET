import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_TYPES } from '../actions/loginActions.js';
import { updateUser, deleteUser } from '../actions/userListActions.js';


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            email: this.props.email,
            type: this.props.type,
            editing: false,
        }

        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
    }

    onDelete() {
        // TODO: add confirmation of user delete
        console.log("user being deleted");

        // this.props.deleteUser(this.state.email);

        // TODO: add refetching of User List

    }

    onUpdate() {
        // TODO: add confirmation of user update`
        console.log("user being updated");

        // this.props.updateUser(
        //     this.state.username,
        //     this.state.email,
        //     this.state.type
        // );

        this.setState({editing: false});

        // TODO: add refetching of User List
    }

    onEdit() {
        this.setState({editing: true});
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
                    <button onClick={this.onDelete}>Delete</button>
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
                    <button onClick={this.onUpdate}>Update</button>
                    <button onClick={this.onEditCancel}>Cancel</button>
                </div>
            );
        }

    }
}


const mapDispatchToProps = dispatch => {
    return {
        updateUser: (username, email, type) => {
            dispatch(updateUser(username, email, type));
        },
        deleteUser: (email) => {
            dispatch(deleteUser(email));
        }
    }
}


export default connect(
    null,
    mapDispatchToProps
)(User);
