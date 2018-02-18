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

    if (req.query.db && req.query.db.toLowerCase() === db.DBNAME) {
        db.reset_database().then(() => {
            db.run_script(path_to_create_db_script).then(() => {
                res.json({valid: true});
            }).catch(err => {
                console.log(err);
                res.json({error: '0 DB Error'});
            });
        }).catch(err => {
            console.error(err);
            res.json({error: '1 DB Error'});
        });
    } else {
        res.json({error: 'Incorrect DB name.'});
    }
}

function insert_test_data(req, res, next) {
    const path_to_test_data_script = __dirname + '/../dbscripts/testdata.sql';

    if (req.query.db && req.query.db.toLowerCase() === db.DBNAME) {
        db.run_script(path_to_test_data_script).then(() => {
            res.json({valid: true});
        }).catch(err => {
            res.json({error: '3 DB Error'});
        });
    }
}

module.exports.create_db = create_db;
module.exports.insert_test_data = insert_test_data;
