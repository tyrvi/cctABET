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
    let email = req.query.email;
    let type = req.query.type;

    if(user && pass && email && type != null && type != undefined) {
        await db.query("INSERT INTO users (username, password, email, type) VALUES ($1::text, $2::text, $3::text, $4::int)",
        [user, pass, email, type]);
        res.json({message: 'User created.'});
    } else {
        res.json({error: 'Could not create user'});
    }
}

module.exports.create_user = create_user;
