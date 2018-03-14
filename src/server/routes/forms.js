var db = require('../db');

/*
    Route function that gets a form
    ?form_id - Optional. The form to get

    Returns json response with error variable set on failure
*/
async function get_forms(req, res, next) {
    let form_id = req.query.form_id;

    let query;
    if(form_id === undefined) {
        query = db.query("SELECT * FROM forms");
    } else {
        query = db.query("SELECT * FROM forms WHERE form_id=$1", [form_id]);
    }

    query.then(result => {
        if(form_id !== undefined) {
            if(result.rows.length === 1) {
                res.json(result.rows[0]);
            } else {
                res.json({error: 'Form does not exist'});
            }
        } else {
            res.json(result.rows);
        }
    }).catch(err => {
        console.error('Error in forms: ', err);
        res.json({error: 'Error fetching form data'});
    });
}

/*
    Route function that deletes a form
    ?form_id - The form id to delete

    Returns json response with error variable set on failure
*/
async function delete_form(req, res, next) {
    let form_id = req.query.form_id;

    if (form_id !== undefined) {
        db.query("DELETE FROM forms WHERE form_id=$1", [form_id], (err, result) => {
            if(err) {
                console.error('Could not delete form:', err);
                res.json({error: 'Could not delete form.'});
            } else {
                res.json({message: 'Success'});
            }
        });
    } else {
        res.json({error: 'Require form_id param.'});
    }
}

/*
    Route function to create a new form

    Parameters:
    {
        course_id: integer,
        outcome: optional string,
        data: optional object
    }
*/
async function create_form(req, res, next) {
    let course_id = req.body.course_id;
    let outcome = req.body.outcome;
    let data = req.body.data;

    if(course_id === undefined) {
        res.json({error: 'Bad body'});
        return;
    }

    if(data === undefined) {
        data = {};
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

/*
    Route function to update a form

    Parameters:
    {
        form_id: integer
        course_id: integer,
        outcome: string,
        data: object
    }
*/
async function update_form(req, res, next) {
    let form_id = req.body.form_id;
    let course_id = req.body.course_id;
    let outcome = req.body.outcome;
    let data = req.body.data;

    if(form_id === undefined || course_id === undefined || outcome === undefined || data === undefined) {
        res.json({error: 'Bad body'});
        return;
    }

    let query = db.query("UPDATE forms SET course_id=$1, outcome=$2, data=$3 WHERE form_id=$4", [course_id, outcome, data, form_id]);
    query.then(result => {
        res.json({message: 'Success'});
    }).catch(err => {
        console.error('Could not update course.', err);
        res.json({error: 'Could not update course.'});
    });
}


module.exports.get_forms = get_forms;
module.exports.create_form = create_form;
module.exports.delete_form = delete_form;
module.exports.update_form = update_form;
