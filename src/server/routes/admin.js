var fs = require('fs')
var db = require('../db');

/*
    Creates the schema of the database.

    !!WARNING THIS DELETES ANY DATA ALREADY IN THE DATABASE!!

    ?db -- The name of the database to create.
           This must be cctabet or the function will fail.
           This is to ensure that the person doing the operation knows what they are doing.
*/
function create_db(req, res, next) {
    const path_to_create_db_script = __dirname + '/../dbscripts/init.sql';

    if(req.query.db && req.query.db.toLowerCase() === 'cctabet') {
        db.reset_database().then(() => {
            fs.readFile(path_to_create_db_script, 'utf8', (err, query) => {
                if (err) {
                    console.error('Could not read file ', path_to_create_db_script + '\n' + err);
                    res.json({error: err});
                } else {
                    db.query(query, (err, data) => {
                        if (err) {
                            console.error('error: ', err);
                            res.json({error: 'DB Error'});
                        } else {
                            res.json({valid: true});
                        }
                    });
                }
            });
        }).catch((err) => {
            console.error(err);
            res.json({error: 'DB error'});
        });
    } else {
        res.json({error: 'Incorrect DB name.'});
    }
}

module.exports.create_db = create_db;
