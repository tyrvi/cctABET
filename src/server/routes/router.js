var express = require('express');
var session = require('express-session');

var router = express.Router();

// Setup the express session middleware
router.use(session({
    secret: 'donocopy_simmons',
    cookie: { maxAge: 60 * (1000 * 60) },
    resave: false,
    saveUninitialized: false
}));

var index = require('./index');
var users = require('./users');
var auth = require('./authenticate');
var admin = require('./admin');

router.get('/', index.index);

router.get('/users/create', users.create_user);

router.get('/auth/login', auth.login);
router.get('/auth/is_logged_in', auth.is_logged_in);
router.get('/auth/logout', auth.logout);

router.get('/admin/create_db', admin.create_db);

module.exports = router;
