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

function course_data(req, res, next) {
    let email = req.query.email;

    if (!email) {
        res.json({error: 'Missing email'});
    } else {
        db.query("SELECT course_id, course_name FROM courses WHERE email=$1::text", [email], (err, result) => {
            if (err) {
                console.error('Error in users: ', err);
                res.json({error: 'Error fetching course data'});
            } else {
                console.log(result.rows);
                res.json({courseData: true});
            }
        })
    }
}

module.exports.create_user = create_user;
module.exports.course_data = course_data;
