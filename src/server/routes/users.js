var db = require('../db');

/*
    Route function that creates a new user in the database
    ?user - the user name
    ?pass - the password

    Returns json response with error variable on failure
*/
async function create_user(req, res, next) {
    let user = req.query.user;
    let pass = req.query.pass;

    if(user && pass) {
        await db.query("INSERT INTO users (username, password) VALUES ($1::text, $2::text)", [user, pass]);
        res.json({message: 'Success'});
    } else {
        res.json({error: 'Could not create user'});
    }
}

module.exports.create_user = create_user;
