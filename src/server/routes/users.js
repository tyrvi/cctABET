var db = require('../db');
var auth = require('./authenticate');

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

    console.log(req.query);

    if(user && pass && email && type != null && type != undefined) {
        await db.query("INSERT INTO users (username, password, email, type) VALUES ($1::text, $2::text, $3::text, $4::int)",
        [user, pass, email, type]);
        res.json({message: 'User created.'});
    } else {
        res.json({error: 'Could not create user'});
    }
}

/*
    Route function that creates a new user in the database
    ?email - the email (primary key) of the user

    Returns json response with error variable on failure
*/
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
                Promise.all(result.rows.map(course => {
                    return get_forms(course).then(forms => {
                        // there was an error
                        if (!forms) {
                            res.json({error: 'Error fetching course data'});
                            return;
                        } else {
                            course.forms = forms;
                            return course;
                        }
                    })
                })).then(data => {
                    res.json({courseData: data});
                });
            }
        })
    }
}

/*
    Helper function that gets the form data for a course
    Params:
        course: a course row from the course table
    Returns:
        A Promise that will contain the results of the query into the
        forms table for the given course

*/
async function get_forms(course) {
    try {
        let result = await db.query("SELECT form_id, outcome FROM forms WHERE course_id=$1::int", [course.course_id]);
        // console.log(result.rows);
        return result.rows;
    } catch (err) {
        console.log(err);
    }

    return Promise.resolve(false);
}

module.exports.create_user = create_user;
module.exports.course_data = course_data;
