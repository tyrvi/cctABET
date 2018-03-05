var db = require('../db');

/*
    Route function that gets users
    ?email - Optional. Filters users by email

    Returns json response with error variable on failure
*/
async function get_users(req, res, next) {
    let email = req.query.email;

    let query;

    if (email) {
        // Get forms associated with a course
        query = db.query("SELECT username, email, type FROM users WHERE email=$1", [email]);
    } else {
        // We don't have a course id, get all courses
        query = db.query("SELECT username, email, type FROM users");
    }

    query.then(result => {
        res.json(result.rows);
    }).catch(err => {
        console.error('Error in users: ', err);
        res.json({error: 'Error fetching user data'});
    });
}

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

    if(user && pass && email && type) {
        await db.query("INSERT INTO users (username, password, email, type) VALUES ($1::text, $2::text, $3::text, $4::int)",
        [user, pass, email, type]);
        res.json({message: 'User created.'});
    } else {
        res.json({error: 'Could not create user'});
    }
}

module.exports.get_users = get_users;
module.exports.create_user = create_user;

