/*
    db.js
    Provides helper functions to interact with database
*/
var pg = require('pg');

// DB credentials
var db = new pg.Client({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'admin',
    database: 'cctabet',
});

// Connect to database
db.connect();
console.log('Connected to DB');

module.exports.query = (query, params, callback) => {
	db.query(query, params, callback);
};
