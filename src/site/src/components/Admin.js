import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Admin.css';
import {
    adminCreateDB,
    insertTestData
} from '../actions/adminActions.js';
import UserAdmin from './UserAdmin.js';
import CourseList from './CourseList.js';


class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resetDB: '',
            testDataDB: ''
        }

        this.onResetDBClick = this.onResetDBClick.bind(this);
        this.onInsertDataClick = this.onInsertDataClick.bind(this);
    }

    onResetDBClick() {
        this.props.adminCreateDB(this.state.resetDB);
        this.setState({resetDB: ''});
    }

    onInsertDataClick() {
        this.props.insertTestData(this.state.testDataDB);
        this.setState({testDataDB: ''});
    }

    render() {
        return (
            <div id="Admin">
                <h1>Admin</h1>
                <div>
                    <div className={this.props.requestError ? "visible failText" : "hidden"}>
                        Error: {this.props.requestError}
                    </div>
                    <div className={this.props.requestMessage ? "visible successText" : "hidden"}>
                        Success: {this.props.requestMessage}
                    </div>
                </div>
                <div>
                    <input type="text" value={this.state.resetDB}
                        onChange={event => this.setState({ resetDB: event.target.value })}
                        placeholder="Database Name" />
                    <button onClick={this.onResetDBClick}>Reset Database</button>
                </div>
                <div>
                    <input type="text" value={this.state.testDataDB}
                        onChange={event => this.setState({ testDataDB: event.target.value })}
                        placeholder="Database Name" />
                    <button onClick={this.onInsertDataClick}>Insert Test Data</button>
                </div>
                <UserAdmin />
                <CourseList />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        adminCreateDB: (db) => {
            dispatch(adminCreateDB(db));
        },
        insertTestData: (db) => {
            dispatch(insertTestData(db))
        },
    }
}

const mapStateToProps = state => {
    return {
        requestMessage: state.admin.requestMessage,
        requestError: state.admin.requestError,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
