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
                <h1>THIS IS SPARTA!!!</h1>
                <div>
                    <input type="text" value={this.state.resetDB}
                        onChange={event => this.setState({ resetDB: event.target.value })}
                        placeholder="Database Name" />
                    <button onClick={this.onResetDBClick}>Reset Database</button>
                    <div className={this.props.createdDB ? "visible successText" : "hidden"}>
                        Success!
                    </div>
                    <div className={this.props.requestError && this.props.createDBResponse ? "visible failText" : "hidden"}>
                        Error: {this.props.requestError}
                    </div>
                </div>
                <div>
                    <input type="text" value={this.state.testDataDB}
                        onChange={event => this.setState({ testDataDB: event.target.value })}
                        placeholder="Database Name" />
                    <button onClick={this.onInsertDataClick}>Insert Test Data</button>
                    <div className={this.props.insertedTestData ? "visible successText" : "hidden"}>
                        Success!
                    </div>
                    <div className={this.props.requestError && this.props.insertTestResponse ? "visible failText" : "hidden"}>
                        Error: {this.props.requestError}
                    </div>
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
        createDBResponse: state.adminReducer.createDBResponse,
        insertTestResponse: state.adminReducer.insertTestResponse,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
