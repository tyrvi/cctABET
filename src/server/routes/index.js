var express = require('express');
var router = express.Router();

console.log('Connecting to DB...');
var pg = require('pg');
var db = new pg.Client({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: 'admin',
  database: 'cctabet'
});

db.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testsignup', async function(req, res, next) {
    let user = req.query.user;
    let pass = req.query.pass;

    if(user && pass) {
        await db.query("INSERT INTO users (username, password) VALUES ($1::text, $2::text)", [user, pass]);
        res.send('user created');
    } else {
        res.send('need user & pass');
    }
});

router.get('/authenticate', function(req, res, next) {
    let user = req.query.user;
    let pass = req.query.pass;

    if(!user || !pass) {
        res.json({'valid': false});
    } else {
        db.query("SELECT * FROM users WHERE username=$1::text AND password=$2::text", [user, pass], (err, result) => {
            if(result['rows'].length > 0) {
                res.json({'valid': true});
            } else {
                res.json({'valid': false});
            }
        });
    }
});

module.exports = router;
