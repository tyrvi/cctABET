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
var courses = require('./courses');
var forms = require('./forms');

router.get('/', index.index);

router.get('/users', auth.require_admin, users.get_users);
router.get('/users/delete', auth.require_admin, users.delete_user);
router.post('/users/create', auth.require_admin, users.create_user);

// secret API endpoint to create user in case of DB reset where cannot
// insert test data
// router.get('/users/secret', users.create_user);

router.get('/auth/login', auth.login);
router.get('/auth/is_logged_in', auth.is_logged_in);
router.get('/auth/logout', auth.require_login, auth.logout);

router.get('/courses', auth.require_login, courses.get_courses);
router.get('/courses/delete', auth.require_login, courses.delete_course);
router.post('/courses/create', auth.require_login, courses.create_course);

router.get('/forms', auth.require_login, forms.get_forms);
router.get('/forms/delete', auth.require_login, forms.delete_form);
router.post('/forms/create', auth.require_login, forms.create_form);
router.post('/forms/update', auth.require_login, forms.update_form);

router.get('/admin/create_db', auth.require_admin, admin.create_db);
router.get('/admin/insert_test_data', auth.require_admin, admin.insert_test_data);

module.exports = router;
