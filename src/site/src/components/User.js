import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_TYPES } from '../actions/loginActions.js';
import { updateUser, deleteUser, getUserList } from '../actions/userAdminActions.js';
import './styles/User.css'


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.user.user_id,
            email: this.props.user.email,
            f_name: this.props.user.f_name,
            l_name: this.props.user.l_name,
            prefix: this.props.user.prefix,
            type: this.props.user.type,
            password: '',
            editing: false,
        }

        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
    }

    onDelete() {
        // TODO: add confirmation of user delete
        this.props.deleteUser(this.props.user.user_id);
        this.props.getUserList(this.props.filter.email);
    }

    onUpdate() {
        // TODO: add confirmation of user update
        let user = {
            user_id: this.state.user_id,
            email: this.state.email,
            password: this.state.password,
            f_name: this.state.f_name,
            l_name: this.state.l_name,
            prefix: this.state.prefix,
            type: this.state.type,
        };

        this.props.updateUser(user);
        this.props.getUserList(this.props.filter.email);

        this.setState({editing: false});
    }

    onEdit() {
        this.setState({editing: true});
    }

    onEditCancel() {
        this.setState({
            user_id: this.props.user.user_id,
            email: this.props.user.email,
            f_name: this.props.user.f_name,
            l_name: this.props.user.l_name,
            prefix: this.props.user.prefix,
            type: this.props.user.type,
            password: '',
            editing: false,
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="userBox">
                    <div className="userItemBox"><b>Email:</b> {this.state.email}</div>
                    <div className="userItemBox"><b>Prefix:</b> {this.state.prefix}</div>
                    <div className="userItemBox"><b>First Name:</b> {this.state.f_name}</div>
                    <div className="userItemBox"><b>Last Name:</b> {this.state.l_name}</div>
                    <div className="userItemBox"><b>User Type:</b> {this.state.type ? "Standard" : "Admin"}</div>
                    <button className="userButton" onClick={this.onEdit}>Edit</button>
                    <button className="userButton" onClick={this.onDelete}>Delete</button>
                </div>
            );
        } else {
            return (
                <div className="userBox">
                    <div className="userItemBox">
                        <b>Email:</b>
                        <input type="text" value={this.state.email}
                            onChange={event => this.setState({email: event.target.value})} />
                    </div>
                    <div className="userItemBox">
                        <b>Password:</b>
                        <input type="text" value={this.state.password}
                            onChange={event => this.setState({password: event.target.value})} />
                    </div>
                    <div className="userItemBox">
                        <b>Prefix:</b>
                        <input type="text" value={this.state.prefix}
                            onChange={event => this.setState({prefix: event.target.value})} />
                    </div>
                    <div className="userItemBox">
                        <b>First Name:</b>
                        <input type="text" value={this.state.f_name}
                            onChange={event => this.setState({f_name: event.target.value})} />
                    </div>
                    <div className="userItemBox">
                        <b>Last Name:</b>
                        <input type="text" value={this.state.l_name}
                            onChange={event => this.setState({l_name: event.target.value})} />
                    </div>
                    <div className="userItemBox">
                        <b>User Type:</b>
                        <select value={this.state.type}
                            onChange={event => this.setState({type: event.target.value})} >
                            <option value={USER_TYPES.STANDARD_USER}>Standard</option>
                            <option value={USER_TYPES.ADMIN_USER}>Admin</option>
                        </select>
                    </div>
                    <button className="userButton" onClick={this.onUpdate}>Update</button>
                    <button className="userButton" onClick={this.onEditCancel}>Cancel</button>
                </div>
            );
        }

    }
}

const mapStateToProps = state => {
    return {
        filter: state.users.filter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (user) => {
            dispatch(updateUser(user));
        },
        deleteUser: (user_id) => {
            dispatch(deleteUser(user_id));
        },
        getUserList: (email) => {
            dispatch(getUserList(email));
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
