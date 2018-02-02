var express = require('express');
var session = require('express-session');
var db = require('../db');
var auth = require('./authenticate');
var router = express.Router();

// Setup the express session middleware
router.use(session({
    secret: 'donocopy_simmons',
    cookie: { maxAge: 60 * (1000 * 60) },
    resave: false,
    saveUninitialized: false
}));

router.get('/login', (req, res, next) => {
    res.send('plz login');
});

// Test dashboard
router.get('/home', auth.require_login, (req, res, next) => {
    res.send('hello ' + req.session.user.username);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Test signup for new user
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

// Setup authentication routes
router.get('/authenticate', auth.authenticate);
router.get('/is_logged_in', auth.is_logged_in);

module.exports = router;
