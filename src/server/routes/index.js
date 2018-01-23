var express = require('express');
var session = require('express-session');
var router = express.Router();

var pg = require('pg');
var db = new pg.Client({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'admin',
    database: 'cctabet',
});

db.connect();
console.log('Connected to DB');

router.use(session({
    secret: 'donocopy_simmons',
    cookie: { maxAge: 60 * (1000 * 60) },
    resave: false,
    saveUninitialized: false
}));

router.get('/login', (req, res, next) => {
    res.send('plz login');
});

function requireLogin(req, res, next) {
    console.log(req.session);
    if(req.session && req.session.user) {
        console.log('node');
        let user = req.session.user;
        db.query("SELECT * FROM users WHERE username=$1::text AND password=$2::text", [user.username, user.password], (err, result) => {
            console.log('waa');
            if(result['rows'].length > 0) {
                console.log('hu');
                next();
            } else {
                console.log('sds');
                res.redirect('/login')
            }
        });
    } else {
        console.log('hhhaaaa');
        res.redirect('/login');
     }
}

router.get('/home', requireLogin, (req, res, next) => {
    res.send('hello ' + req.session.user.username);
});

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
                let user = result['rows'][0];
                console.log(result['rows'][0]);
                req.session.user = user;
                res.redirect('/home');

                //res.json({'valid': true});
            } else {
                res.json({'valid': false});
            }
        });
    }
});

module.exports = router;
