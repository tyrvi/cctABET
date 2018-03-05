var db = require('../db');

/*
    Route function that gets courses
    ?email - Optional parameter. Filters courses by user

    Returns json response with error variable set on failure
*/
function get_courses(req, res, next) {
    let email = req.query.email;

    let query;

    if (email) {
        // Get courses associated with a user
        query = db.query("SELECT course_id, course_name, semester, year FROM courses WHERE email=$1::text", [email]);
    } else {
        // We don't have an email, get all courses
        query = db.query("SELECT course_id, course_name, semester, year FROM courses");
    }

    query.then(result => {
        return res.json(result.rows);
    }).catch(err => {
        console.error('Error in courses: ', err);
        res.json({error: 'Error fetching course data'});
    });
}

/*
    Route function that deletes a course
    ?course - The course id to delete

    Returns json response with error variable set on failure
*/
async function delete_course(req, res, next) {
    let course = req.query.form;

    if (course) {
        db.query("DELETE FROM courses WHERE course_id=$1::integer", [course], (err, result) => {
            if(err) {
                console.error('Could not delete course.', err);
                res.json({error: 'Could not delete course.'});
            } else {
                res.json({message: 'Success'});
            }
        });
    } else {
        res.json({error: 'Require course param.'});
    }
}

module.exports.get_courses = get_courses;
