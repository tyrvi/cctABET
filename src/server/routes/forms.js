var db = require('../db');
var knex = require('knex')({client: 'pg'});

/*
    Route function that gets a form
    ?form_id - Optional. The form to get
    ?course_id - Optional. The course id of the forms to get

    Returns json response with error variable set on failure
*/
async function get_forms(req, res, next) {
    // let form_id = req.query.form_id;

    // let query;
    // if(form_id === undefined) {
    //     query = db.query("SELECT * FROM forms");
    // } else {
    //     query = db.query("SELECT * FROM forms WHERE form_id=$1", [form_id]);
    // }


    // query.then(result => {
    //     if(form_id !== undefined) {
    //         if(result.rows.length === 1) {
    //             res.json(result.rows[0]);
    //         } else {
    //             res.json({error: 'Form does not exist'});
    //         }
    //     } else {
    //         res.json(result.rows);
    //     }
    // }).catch(err => {
    //     console.error('Error in forms: ', err);
    //     res.json({error: 'Error fetching form data'});
    // });

    let form_id = req.query.form_id;
    let course_id = req.query.course_id;

    let knex_query = knex.select(
        'forms.form_id',
        'forms.course_id',
        'forms.outcome',
        'forms.completed',
        'forms.data'
    ).from('forms');

    if (form_id !== undefined) {
        knex_query.andWhere('forms.form_id', '=', form_id);
    }

    if (course_id !== undefined) {
        knex_query.andWhere('forms.course_id', '=', course_id);
    }

    knex_query = knex_query.toSQL().toNative();

    let query = db.query(knex_query.sql, knex_query.bindings);
    query.then(result => {
        if (form_id !== undefined) {
            if (result.rows.length === 1) {
                res.json(result.rows[0]);
            } else {
                res.json({error: 'Form does not exist'});
            }
        } else {
            res.json(result.rows);
        }
    }).catch(err => {
        console.error('Error in forms', err);
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
        completed: optional int,
        data: optional object
    }
*/
async function create_form(req, res, next) {
    let course_id = req.body.course_id;
    let outcome = req.body.outcome;
    let completed = req.body.completed;
    let data = req.body.data;

    if(course_id === undefined) {
        res.json({error: 'Bad body'});
        return;
    }

    if(outcome === undefined) {
        outcome = '';
    }

    if(completed === undefined) {
        completed = 0;
    }

    if(data === undefined) {
        data = {};
    }

    let query = db.query("INSERT INTO forms (course_id, outcome, completed, data) values ($1, $2, $3, $4)", [course_id, outcome, completed, data]);
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
        completed: int,
        data: object
    }
*/
async function update_form(req, res, next) {
    let form_id = req.body.form_id;
    let course_id = req.body.course_id;
    let outcome = req.body.outcome;
    let completed = req.body.completed;
    let data = req.body.data;

    if(form_id === undefined || completed === undefined || data === undefined) {
        res.json({error: 'Bad body'});
        return;
    }

    if(outcome === undefined) {
        outcome = '';
    }

    let query;
    if(course_id === undefined) {
        query = db.query("UPDATE forms SET outcome=$1, completed=$2, data=$3 WHERE form_id=$4", [outcome, completed, data, form_id]);
    }
    else {
        query = db.query("UPDATE forms SET course_id=$1, outcome=$2, completed=$3, data=$4 WHERE form_id=$5", [course_id, outcome, completed, data, form_id]);
    }

    query.then(result => {
        res.json({message: 'Success'});
    }).catch(err => {
        console.error('Could not update course.', err);
        res.json({error: 'Could not update course.'});
    });
}


/*
    Route function to update a form

    Parameters:
    [
        {
            form_id: integer -- If undefined or null, creates form instead of updates
            course_id: integer,
            outcome: string,
            completed: int,
            data: object
        },
        ...
    ]
*/
async function mass_update_forms(req, res, next) {
    for (let form of req.body) {
        console.log(form);
        let form_id = form.form_id;
        let course_id = form.course_id;
        let outcome = form.outcome;
        let completed = form.completed;
        let data = form.data;

        if(completed === undefined || data === undefined) {
            res.json({error: 'Bad body'});
            return;
        }

        if(outcome === undefined) {
            outcome = '';
        }

        let query;
        if(form_id !== undefined && form_id !== null) {
            if(course_id === undefined) {
                query = db.query("UPDATE forms SET outcome=$1, completed=$2, data=$3 WHERE form_id=$4", [outcome, completed, data, form_id]);
            }
            else {
                query = db.query("UPDATE forms SET course_id=$1, outcome=$2, completed=$3, data=$4 WHERE form_id=$5", [course_id, outcome, completed, data, form_id]);
            }
        }
        else {
            query = db.query("INSERT INTO forms (course_id, outcome, completed, data) values ($1, $2, $3, $4)", [course_id, outcome, completed, data]);
        }

        try {
            await query;
        }
        catch(err) {
            console.error(err);
            res.json({error: 'Bad query'});
            return;
        }
    }

    res.json({message: 'Success'});
}


module.exports.get_forms = get_forms;
module.exports.create_form = create_form;
module.exports.delete_form = delete_form;
module.exports.update_form = update_form;
module.exports.mass_update_forms = mass_update_forms;

