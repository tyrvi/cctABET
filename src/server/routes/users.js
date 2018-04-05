var db = require('../db');
var crypto = require('crypto');


/*
    Route function that deletes a user
    ?email - The user to delete
*/
async function delete_user(req, res, next) {
    let email = req.query.email;

    if (email) {
        let query = db.query("DELETE FROM users WHERE email=$1", [email]);
        query.then(result => {
            res.json({message: email + ' successfully deleted.'});
        }).catch(err => {
            console.error('Could not delete user.', err);
            res.json({error: 'Could not delete user.'});
        });
    } else {
        res.json({error: 'Require email param.'});
    }
}

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
        console.log(result.rows.length);

        if(email) {
            if(result.rows.length === 1) {
                res.json(result.rows[0]);
            } else {
                res.json({error: 'User does not exist'});
            }
        } else {
            res.json(result.rows);
        }
    }).catch(err => {
        console.error('Error in users: ', err);
        res.json({error: 'Error fetching user data'});
    });
}

/*
    Route function that creates a new user in the database
    ?user - The username
    ?pass - The password
    ?email - The email of the user
    ?type - The type of the user

    Returns json response with error variable on failure
*/
async function create_user(req, res, next) {
    let user = req.query.user;
    let pass = req.query.pass;
    let email = req.query.email;
    let type = req.query.type;

    // Properly hashes the password before comparing user hash to database hash
    var hash = crypto.createHash('sha256');
    hash.update(pass);

    if(user && pass && email && type) {
        await db.query("INSERT INTO users (username, password, email, type) VALUES ($1::text, $2::text, $3::text, $4::int)",
        [user, hash, email, type]);
        res.json({message: 'User created.'});
    } else {
        res.json({error: 'Could not create user'});
    }
}

module.exports.get_users = get_users;
module.exports.create_user = create_user;
module.exports.delete_user = delete_user;
