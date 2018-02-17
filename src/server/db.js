/*
    db.js
    Provides helper functions to interact with database
*/
var pg = require('pg');

function create_client(database) {
    client_info = {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'admin',
    };

    if(database) {
        client_info.database = database;
    }

    return new pg.Client(client_info);
}

var db = create_client('cctabet');

// Connect to database
db.connect().then((result) => {
    console.log('Connected to DB');
}, (err) => {
    console.log('ERROR: Failed to connect to DB.');
    console.log(err);
});

async function reset_database() {
    // Disconnect client to cctabet database
    await db.end();

    // Create new client that is not connected to database
    var psql = create_client();
    await psql.connect();

    // Delete database
    await psql.query('DROP DATABASE IF EXISTS CCTABET;');
    await psql.query('CREATE DATABASE CCTABET;');

    await psql.end();

    // Reconnect to database
    db = create_client('cctabet');
    return db.connect();
}

module.exports.reset_database = reset_database;

module.exports.query = (...args) => {
    // Forward arguments to db.query();
    return db.query.apply(db, args);
};
