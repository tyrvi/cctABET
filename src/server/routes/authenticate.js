var db = require('../db');

/*
	Authentication route function
	Authenticates a user with url params:
	?username -- The username
	?password -- The password

	Returns:
		json response with attribute 'valid' that is true on success
*/
function authenticate(req, res, next) {
	let user = req.query.user;
    let pass = req.query.pass;
    if(!user || !pass) {
        res.json({'valid': false});
    } else {
        db.query("SELECT * FROM users WHERE username=$1::text AND password=$2::text", [user, pass], (err, result) => {
                        
            if(result['rows'].length > 0) {
                // Get the user from the result
                let user = result['rows'][0];

                // We don't need that
                delete user.password;

                // Store the user in the session
                req.session.user = user;

                res.json({'valid': true});
            } else {
                res.json({'valid': false});
            }
        });
    }
}

/*
	Middleware function to ensure a user is logged in
	Redirects to the constant defined in the function if login fails
	Continues with the request otherwise
*/
function require_login(req, res, next) {
	const login_failed_redirect = '/login';

	// Check if we have a user session
    if(req.session && req.session.user) {
		// Get the user from the session
        let user = req.session.user;

		// Check if the user exists
        db.query("SELECT * FROM users WHERE username=$1::text", [user.username], (err, result) => {
            if(result['rows'].length > 0) {
				// They exist, move on
				next();
            } else {
                res.redirect(login_failed_redirect);
            }
        });
    } else {
        res.redirect(login_failed_redirect);
     }
}

module.exports.authenticate = authenticate;
module.exports.require_login = require_login;
