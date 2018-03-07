var db = require('../db');

/*
    Route function that gets a form
    ?form - The form to get

    Returns json response with error variable set on failure
*/
async function get_forms(req, res, next) {
    let form = req.query.form;

    if(!form) {
        res.json({error: 'Require form parameter'});
    } else {
        let query = db.query("SELECT form_id, outcome, data FROM forms WHERE form_id=$1::integer", [form]);

        query.then(result => {
            if(result.rows.length === 1) {
                res.json(result.rows[0]);
            } else {
                res.json({error: 'Form does not exist'});
            }
        }).catch(err => {
            console.error('Error in courses: ', err);
            res.json({error: 'Error fetching course data'});
        });
    }
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

/*
    Route function to create a new form
    ?course - The course id that owns this form
    ?outcome - Optional. The outcome of this form
*/
async function create_form(req, res, next) {
    let course_id = req.query.course;
    let outcome = req.query.outcome;
    let data = {};

    if(!course_id) {
        res.json({error: 'Require course id'});
        return;
    }

    if(outcome === undefined) {
        outcome = '';
    }

    let query = db.query("INSERT INTO forms (course_id, outcome, data) values ($1, $2, $3)", [course_id, outcome, data]);
    query.then(result => {
        res.json({message: 'Success'});
    }).catch(err => {
        console.error('Could not create course.', err);
        res.json({error: 'Could not create course.'});
    });
}


module.exports.get_forms = get_forms;
module.exports.create_form = create_form;
module.exports.delete_form = delete_form;
