var db = require('../db');

/*
    Route function that gets forms
    ?course - Optional parameter. Filters forms by course_id

    Returns json response with error variable set on failure
*/
async function get_forms(req, res, next) {
    let course = req.query.course;

    let query;

    if (course) {
        // Get forms associated with a course
        query = db.query("SELECT form_id, outcome, data FROM forms WHERE course_id=$1::integer", [course]);
    } else {
        // We don't have a course id, get all courses
        query = db.query("SELECT form_id, outcome, data FROM forms");
    }

    query.then(result => {
        res.json(result.rows);
    }).catch(err => {
        console.error('Error in courses: ', err);
        res.json({error: 'Error fetching course data'});
    });
}

/*
    Route function that deletes a form
    ?form - The form id to delete

    Returns json response with error variable set on failure
*/
async function delete_form(req, res, next) {
    let form = req.query.form;

    if (form) {
        db.query("DELETE FROM forms WHERE form_id=$1::integer", [form], (err, result) => {
            if(err) {
                console.error('Could not delete form:', err);
                res.json({error: 'Could not delete form.'});
            } else {
                res.json({message: 'Success'});
            }
        });
    } else {
        res.json({error: 'Require form param.'});
    }
}

module.exports.get_forms = get_forms;
module.exports.delete_form = delete_form;
