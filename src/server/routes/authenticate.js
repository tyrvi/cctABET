var db = require('../db');
var crypto = require('crypto');

const USER_TYPES = {
    ADMIN_USER: 0,
    STANDARD_USER: 1,
}

/*
	Authentication route function
	Authenticates a user with url params:
	?user -- The username
	?pass -- The password

	Returns:
		json response with attribute 'valid' that is true on success
*/
function login(req, res, next) {
  let user = req.query.user;
  let pass = req.query.pass;

  // Properly hashes the password before comparing user hash to database hash
  var hash = crypto.createHash('sha256');
  hash.update(pass);

    db.query("SELECT * FROM users", (err, result) => {
        console.log(result);
    });

    if(!user || !pass) {
        res.json({error: 'Missing username or password'});
    } else {
        db.query("SELECT * FROM users WHERE username=$1::text AND password=$2::text", [user, hash], (err, result) => {
            if(err) {
                console.log('Error in authenticate: ' + err);
                res.json({error: 'Authentication error'});
            }
            else if(result['rows'].length > 0) {
                // Get the user from the result
                let user = result['rows'][0];

                // We don't need that
                delete user.password;

                // Store the user in the session
                req.session.user = user;

                res.json({
                    valid: true,
                    userData: user,
                });
            } else {
                res.json({error: 'Incorrect username or password'});
            }
        });
    }
}

function logout(req, res, next) {
    if (req.session) {
        delete req.session.user;
        res.json({logout: true});
    } else {
        res.json({logout: false});
    }
}

/*
	Helper route function that returns whether a user is logged in

	Returns:
		{ logged_in: true } if the user is logged in
		{ logged_in: false } otherwise
*/
function is_logged_in(req, res, next) {
    response = {};
	logged_in(req).then((logged_in) => {
        response.logged_in = logged_in;
        response.userData = req.session.user;
        res.json(response);
    });
}

/*
	Middleware function to ensure a user is logged in
	Returns a json error on failure
	Continues with the request otherwise
*/
async function require_login(req, res, next) {
    if(await logged_in(req)) {
		next();
	} else {
		res.json({error: 'You must be logged in to access this.'});
	}
}

/*
    Middleware function to ensure a user is an admin user and logged in
	Returns a json error on failure
	Continues with the request otherwise
*/
async function require_admin(req, res, next) {
    if (await logged_in(req)) {
        if (req.session.user.type === USER_TYPES.ADMIN_USER) {
            next();
        } else {
            res.json({error: 'You must be an admin user to access this.'})
        }
    } else {
        res.json({error: 'You must be logged in to access this.'});
    }
}

/*
	Helper function that returns if a user is logged in

	Returns:
		Promise that is true if the user is logged in, false otherwise
*/
async function logged_in(req) {
	if(req.session && req.session.user) {
		// Get the user from the session
        let user = req.session.user;

		// Check if the user exists
		try {
			let result = await db.query("SELECT * FROM users WHERE username=$1::text", [user.username]);
            return result.rows.length == 1;
		} catch(err) {
			console.log(err);
		}
    }
    return Promise.resolve(false);
}

// Routes
module.exports.login = login;
module.exports.is_logged_in = is_logged_in;
module.exports.logout = logout;

// Middleware
module.exports.require_login = require_login;
module.exports.require_admin = require_admin;
