var pg = require('pg');
var db = new pg.Client({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'admin',
    database: 'cctabet',
});

db.connect();
console.log('Connected to DB');

module.exports.query = (query, params, callback) => {
	db.query(query, params, callback);
};
