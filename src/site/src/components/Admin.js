import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import { adminCreateDB, insertTestData } from '../actions/adminActions.js';


class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resetDB: '',
            testDataDB: '',
        }
    }

    onResetDBClick() {
        this.props.adminCreateDB(this.state.resetDB);
    }

    onInsertDataClick() {
        this.props.insertTestData(this.state.testDataDB);
    }

    render() {
        return (
            <div id="Admin">
                <h1>THIS IS SPARTA!!!</h1>
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
    console.log(state);
    return {
        isDoingRequest: state.adminReducer.isDoingRequest,
        createdDB: state.adminReducer.createdDB,
        insertedTestData: state.adminReducer.insertedTestData,
        requestError: state.adminReducer.requestError,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
