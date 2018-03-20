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
                res.json({valid: true, message: 'Reset database'});
            }).catch(err => {
                console.log(err);
                res.json({error: 'DB Error'});
            });
        }).catch(err => {
            console.error(err);
            res.json({error: 'DB Error'});
        });
    } else {
        res.json({error: 'Incorrect DB name'});
    }
}

/*
    Inserts test data in the database. Be careful, its hot

    !!WARNING THIS INSERTS FAKE DATA INTO DATABASE!!

    ?db -- The name of the database to insert.
           This must be cctabet or the function will fail.
           This is to ensure that the person doing the operation knows what they are doing.
*/
function insert_test_data(req, res, next) {
    const path_to_test_data_script = __dirname + '/../dbscripts/testdata.sql';

    if (req.query.db && req.query.db.toLowerCase() === db.DBNAME) {
        db.run_script(path_to_test_data_script).then(() => {
            res.json({valid: true, message: 'Inserted test data'});
        }).catch(err => {
            res.json({error: 'DB Error'});
        });
    } else {
        res.json({error: 'Missing db name'});
    }
}

module.exports.create_db = create_db;
module.exports.insert_test_data = insert_test_data;
