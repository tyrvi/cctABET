var db = require('../db');

/*
    Route function that gets courses
    ?user_id - Optional parameter. Filters courses by user

    Returns json response with error variable set on failure
*/
function get_courses(req, res, next) {
    let user_id = req.query.user_id;

    let query;

    if (user_id) {
        // Get courses associated with a user
        query = db.query("SELECT * FROM courses WHERE user_id=$1", [user_id]);
    } else {
        // We don't have a user, get all courses
        query = db.query("SELECT * FROM courses");
    }

    query.then(result => {
        console.log(result);

        Promise.all(result.rows.map(course => {
            return get_forms(course).then(forms => {
                // There was an error
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
        let result = await db.query("SELECT form_id, outcome FROM forms WHERE course_id=$1", [course.course_id]);
        return result.rows;
    } catch (err) {
        console.log(err);
    }

    return Promise.resolve(false);
}


/*
    Route function that deletes a course
    ?course_id - The course id to delete

    Returns json response with error variable set on failure
*/
async function delete_course(req, res, next) {
    let course_id = req.query.course_id;

    if (course_id) {
        let query = db.query("DELETE FROM courses WHERE course_id=$1", [course_id]);
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

    {
        course_name: string,
        user_id: optional int,
        semester: string,
        year: int
    }
*/
async function create_course(req, res, next) {
    console.log(req.body);
    let course_name = req.body.course_name;
    let user_id = req.body.user_id;
    let semester = req.body.semester;
    let year = req.body.year;

    if(!course_name || !semester || !year) {
        res.json({error: 'Bad body'});
        return;
    }

    let query = db.query("INSERT INTO courses (course_name, user_id, semester, year) values ($1, $2, $3, $4)", [course_name, user_id, semester, year]);
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
