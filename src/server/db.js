/*
    db.js
    Provides helper functions to interact with database
*/
var pg = require('pg');

// DB credentials
var db = new pg.Client({
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'admin',
    database: 'cctabet',
});

// Connect to database
db.connect().then((result) => {
    console.log('Connected to DB');
}, (err) => {
    console.log('ERROR: Failed to connect to DB.');
    console.log(err);
});

module.exports.query = (...args) => {
    // Forward arguments to db.query();
    return db.query.apply(db, args);
};
