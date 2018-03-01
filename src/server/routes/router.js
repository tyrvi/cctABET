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

router.get('/users/create', auth.require_admin, users.create_user);
router.get('/users/course_data', auth.require_login, users.course_data);

// secret API endpoint to create user in case of DB reset where cannot
// insert test data
// router.get('/users/secret', users.create_user);

router.get('/auth/login', auth.login);
router.get('/auth/is_logged_in', auth.is_logged_in);
router.get('/auth/logout', auth.require_login, auth.logout);

router.get('/admin/create_db', auth.require_admin, admin.create_db);
// TODO: add require_admin to insert test data once able
router.get('/admin/insert_test_data', admin.insert_test_data);

module.exports = router;
