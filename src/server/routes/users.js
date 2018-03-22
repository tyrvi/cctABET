var db = require('../db');


/*
    Route function that deletes a user
    ?user_id - The user to delete
*/
async function delete_user(req, res, next) {
    let user_id = req.query.user_id;

    if (user_id) {
        let query = db.query("DELETE FROM users WHERE user_id=$1", [user_id]);
        query.then(result => {
            res.json({message: 'User successfully deleted.'});
        }).catch(err => {
            console.error('Could not delete user.', err);
            res.json({error: 'Could not delete user.'});
        });
    } else {
        res.json({error: 'Require user_id param.'});
    }
}

/*
    Route function that gets users
    ?user_id - Optional. Filters users by email

    Returns json response with error variable on failure
*/
async function get_users(req, res, next) {
    let user_id = req.query.user_id;

    let query;

    if (user_id) {
        // Get user associated with user_id
        query = db.query("SELECT user_id, email, f_name, l_name, prefix, type FROM users WHERE user_id=$1", [user_id]);
    } else {
        // We don't have a user id, get all users
        query = db.query("SELECT user_id, email, f_name, l_name, prefix, type FROM users");
    }

    query.then(result => {
        console.log(result.rows.length);

        if(user_id) {
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
module.exports.delete_user = delete_user;

