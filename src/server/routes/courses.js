var db = require('../db');
var knex = require('knex')({client: 'pg'});

/*
    Route function that gets courses
    ?user_id - Optional parameter. Filters courses by user
    ?year - Optional parameter. Filters courses by year
    ?semester - Optional parameter. Filters courses by semester
    ?email - Optional parameter. Filters courses by email

    Returns json response with error variable set on failure
*/
function get_courses(req, res, next) {
    let user_id = req.query.user_id;
    let year = req.query.year;
    let semester = req.query.semester;
    let email = req.query.email;

    let knex_query = knex.select('courses.course_id', 'courses.course_name', 'courses.user_id', 'courses.semester', 'courses.year', 'users.email')
    .from('courses');

    if(user_id === undefined) {
        knex_query.leftJoin('users', 'users.user_id', '=', 'courses.user_id');
    } else {
        knex_query.innerJoin('users', 'users.user_id', '=', 'courses.user_id')
        .andWhere('courses.user_id', '=', user_id);
    }

    if(year !== undefined) {
        knex_query.andWhere('courses.year', '=', year);
    }

    if(semester !== undefined) {
        knex_query.andWhere('courses.semester', '=', semester);
    }

    if(email !== undefined) {
        knex_query.andWhere('users.email', '=', email);
    }

    knex_query = knex_query.toSQL().toNative();

    let query = db.query(knex_query.sql, knex_query.bindings);
    query.then(result => {
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

    if (course_id !== undefined) {
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
        email: optional string,
        semester: string,
        year: int
    }
*/
async function create_course(req, res, next) {
    let course_name = req.body.course_name;
    let email = req.body.email;
    let semester = req.body.semester;
    let year = req.body.year;

    if(course_name === undefined || semester === undefined || year === undefined) {
        res.json({error: 'Bad body'});
        return;
    }

    let user_id = null;
    if(email !== undefined) {
        let query = db.query("SELECT user_id FROM users WHERE email=$1", [email]);
        try {
            let result = await query;
            user_id = result.rows[0].user_id;
        }
        catch(err) {
            res.json({error: 'Could not assign user to course.'});
            console.error(err);
        }
    }

    let query = db.query("INSERT INTO courses (course_name, user_id, semester, year) values ($1, $2, $3, $4)", [course_name, user_id, semester, year]);
    query.then(result => {
        res.json({message: 'Success'});
    }).catch(err => {
        console.error('Could not create course.', err);
        res.json({error: 'Could not create course.'});
    });
}

/*
    Route function to update a course

    {
        course_id: int
        course_name: string,
        email: optional string,
        semester: string,
        year: int
    }
*/
async function update_course(req, res, next) {
    let course_id = req.body.course_id;
    let course_name = req.body.course_name;
    let email = req.body.email;
    let semester = req.body.semester;
    let year = req.body.year;

    if(course_id === undefined || course_name === undefined || semester === undefined || year === undefined) {
        res.json({error: 'Bad body'});
        return;
    }

    let user_id = null;

    if(email !== undefined) {
        let query = db.query("SELECT user_id FROM users WHERE email=$1", [email]);
        try {
            let result = await query;
            user_id = result.rows[0].user_id;
        }
        catch(err) {
            res.json({error: 'Could not assign user to course.'});
            console.error(err);
        }
    }

    let query = db.query("UPDATE courses SET course_name=$1, user_id=$2, semester=$3, year=$4 WHERE course_id=$5", [course_name, user_id, semester, year, course_id]);
    query.then(result => {
        res.json({message: 'Success'});
    }).catch(err => {
        console.error('Could not update course.', err);
        res.json({error: 'Could not update course.'});
    });
}

module.exports.get_courses = get_courses;
module.exports.create_course = create_course;
module.exports.delete_course = delete_course;
module.exports.update_course = update_course;
