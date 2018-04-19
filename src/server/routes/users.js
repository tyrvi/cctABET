var db = require('../db');


/*
    Route function that deletes a user
    ?user_id - The user to delete
*/
async function delete_user(req, res, next) {
    let user_id = req.query.user_id;

    if (user_id !== undefined) {
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
    ?user_id - Optional. Filters users by user_id
    ?email - Optional. Filters users by email

    Returns json response with error variable on failure
*/
async function get_users(req, res, next) {
    let user_id = req.query.user_id;
    let email = req.query.email;

    let query;

    if (user_id !== undefined) {
        // Get user associated with user_id
        query = db.query("SELECT user_id, email, f_name, l_name, prefix, type FROM users WHERE user_id=$1", [user_id]);
    } else if(email !== undefined) {
        // Get user associated with email
        query = db.query("SELECT user_id, email, f_name, l_name, prefix, type FROM users WHERE email=$1", [email]);
    } else {
        // We don't have a user id, get all users
        query = db.query("SELECT user_id, email, f_name, l_name, prefix, type FROM users");
    }

    query.then(result => {
        console.log(result.rows.length);

        if(user_id !== undefined || email !== undefined) {
            if(result.rows.length === 1) {
                res.json(result.rows);
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

    Parameters:
    {
        email: string,
        password: string,
        f_name: optional string,
        l_name: optional string,
        prefix: optional string,
        type: int
    }

    Returns json response with error variable on failure
*/
async function create_user(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let f_name = req.body.f_name;
    let l_name = req.body.l_name;
    let prefix = req.body.prefix;
    let type = req.body.type;

    if(f_name === undefined) {
        f_name = '';
    }

    if(l_name === undefined) {
        l_name = '';
    }

    if (prefix === undefined) {
        prefix = '';
    }

    if(email === undefined || password === undefined || type === undefined) {
        res.json({error: 'Bad body'});
        return;
    }

    let query = db.query("INSERT INTO users (email, password, f_name, l_name, prefix, type) VALUES ($1, $2, $3, $4, $5, $6)", [email, password, f_name, l_name, prefix, type]);
    query.then(result => {
        res.json({message: 'User created.'});
    }).catch(err => {
        console.log(err);
        res.json({error: 'Could not create user.'});
    });
}

/*
    Route function that updates a user

    Parameters:
    {
        user_id: int,
        email: string,
        password: optional string,
        f_name: string,
        l_name: string,
        prefix: string,
        type: int
    }

    Returns json response with error variable on failure
*/
async function update_user(req, res, next) {
    let user_id = req.body.user_id;
    let email = req.body.email;
    let password = req.body.password;
    let f_name = req.body.f_name;
    let l_name = req.body.l_name;
    let prefix = req.body.prefix;
    let type = req.body.type;

    if(user_id === undefined || email === undefined || f_name === undefined || l_name === undefined || prefix === undefined || type === undefined) {
        res.json({error: 'Bad body'});
        return;
    }

    let query;
    if(password === undefined || password === "") {
        query = db.query("UPDATE users SET email=$1, f_name=$2, l_name=$3, prefix=$4, type=$5 WHERE user_id=$6", [email, f_name, l_name, prefix, type, user_id]);
    } else {
        query = db.query("UPDATE users SET email=$1, f_name=$2, l_name=$3, prefix=$4, type=$5, password=$6 WHERE user_id=$7", [email, f_name, l_name, prefix, type, password, user_id]);
    }
    query.then(result => {
        res.json({message: 'User updated.'});
    }).catch(err => {
        console.log(err);
        res.json({error: 'Could not update user.'});
    });
}

module.exports.get_users = get_users;
module.exports.create_user = create_user;
module.exports.delete_user = delete_user;
module.exports.update_user = update_user;

