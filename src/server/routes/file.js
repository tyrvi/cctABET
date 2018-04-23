var db = require('../db');
var fs = require('fs');
var multer = require('multer');

let UPLOAD_PATH = '/uploads/';

var upload = multer({dest: UPLOAD_PATH});

/*
    ?form_id - The id of the form related to this file
*/
async function download_file(req, res, next) {
    let form_id = req.query.form_id;
    if(form_id === undefined) {
        res.json({error: 'Requires ?form_id'});
        return;
    }

    let query = db.query("SELECT file_name, original_file_name FROM files WHERE form_id = $1", [form_id]);
    query.then(result => {
        if(result.rows.length >= 1) {
            res.download(__dirname + '/../uploads/' + result.rows[0].file_name, result.rows[0].original_file_name);
        } else {
            res.json({error: 'Could not find file to download'});
        }
    }).catch(err => {
        res.json({error: 'Bad db query'});
        console.log(err);
    });
}

/*

*/
async function delete_file(req, res, next) {

}

/*
    ?form_id - The id of the form related to this file
*/
async function get_file(req, res, next) {
    let form_id = req.query.form_id;
    if(form_id === undefined) {
        res.json({error: 'Requires ?form_id'});
        return;
    }

    let query = db.query("SELECT original_file_name FROM files WHERE form_id = $1", [form_id]);
    query.then(result => {
        if(result.rows.length >= 1) {
            res.json({file: result.rows[0]});
        } else {
            res.json({file: undefined});
        }
    }).catch(err => {
        res.json({error: 'Bad db query'});
        console.log(err);
    });
}

/*
    Route function that creates a new file on the server
*/
async function upload_files(req, res, next) {
    upload.any()(req, res, (err) => {
        if (err) {
          res.json(err);
          return;
        }

        let form_id = req.query.form_id;
        if(form_id === undefined) {
            res.json({error: 'Bad query'});
            return;
        }

        if(req.files === undefined) {
            res.json({error: 'No file uploaded', file_missing: true});
            return;
        }

        let file = req.files[0];
        if(file === undefined) {
            res.json({error: 'No file uploaded', file_missing: true});
            return;
        }

        if(file.mimetype !== 'application/zip') {
            res.json({error: 'Not a zip file', not_zip: true});
        }

        // Delete file associated with form. Only one file per form for now boyos
        let delete_query = db.query("DELETE FROM files WHERE form_id = $1", [form_id]);
        delete_query.then(() => {
            remove_orphan_files();

            let query = db.query("INSERT INTO files (file_name, original_file_name, form_id) VALUES ($1, $2, $3)", [file.filename, file.originalname, form_id]);
            query.then(() => {
                res.json({message: 'File uploaded'});
            }).catch(err => {
                res.json({message: 'File uploaded but DB entry failed'});
            });
        }).catch(err => {
            res.json("Error: bad delete query in " + __filename);
            console.log(err);
        });
    });
}

/*
    Removes files not associated with the database
*/
async function remove_orphan_files() {
    let query = db.query("SELECT file_name FROM");
    query.then(result => {

    }).catch(err => {
        res.json({error: 'Bad db query'});
        console.log(err);
    });
}

module.exports.download_file = download_file;
module.exports.get_file = get_file;
module.exports.upload_files = upload_files;
module.exports.delete_file = delete_file;

