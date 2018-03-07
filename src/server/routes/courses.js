var db = require('../db');

/*
    Route function that gets courses
    ?email - Optional parameter. Filters courses by user
    ?forms - Optional paramater. If this is set, return forms associated with each course
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
    }).catch(err => {
        console.error('Error in users: ', err);
        res.json({error: 'Error fetching course data'});
    });
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


/*
    Route function that deletes a course
    ?course - The course id to delete

    Returns json response with error variable set on failure
*/
async function delete_course(req, res, next) {
    let course = req.query.course;

    if (course) {
        let query = db.query("DELETE FROM courses WHERE course_id=$1::integer", [parseInt(course)]);
        query.then(result => {
            res.json({message: 'Success'});
        }).catch(err => {
            console.error('Could not delete course.', err);
            res.json({error: 'Could not delete course.'});
        });
    } else {
        res.json({error: 'Require course param.'});
    }
}

/*
    Route function to create a new course
    ?name - The name of the new course
    ?email - Optional. The email of the professor
    ?semester - The semester this course is
    ?year - The year the course is
*/
async function create_course(req, res, next) {
    let course_name = req.query.name;
    let email = req.query.email;
    let semester = req.query.semester;
    let year = req.query.year;

    if(!course_name) {
        res.json({error: 'Require name'});
        return;
    }

    if(email === undefined) {
        email = null;
    }

    if(semester === undefined) {
        semester = '';
    }

    if(year === undefined) {
        year = 2000;
    }

    let query = db.query("INSERT INTO courses (course_name, email, semester, year) values ($1, $2, $3, $4)", [course_name, email, semester, year]);
    query.then(result => {
        res.json({message: 'Success'});
    }).catch(err => {
        console.error('Could not create course.', err);
        res.json({error: 'Could not create course.'});
    });
}

module.exports.get_courses = get_courses;
module.exports.create_course = create_course;
module.exports.delete_course = delete_course;
