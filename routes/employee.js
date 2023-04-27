var express = require('express');
const employee_controlers= require('../controllers/employee');
var router = express.Router();
/* GET employees */
router.get('/', employee_controlers.employee_view_all_Page );
module.exports = router;

router.get('/detail', employee_controlers.employee_view_one_Page);
//router.get('/create',employee_controlers.employee_create_Page);
//router.get('/update',employee_controlers.employee_update_Page);
//router.get('/delete',employee_controlers.employee_delete_Page);

// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('employee', { title: 'Search Results'});
// });

// module.exports = router;

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
 router.get('/create',secured,employee_controlers.employee_create_Page);
router.get('/update',secured,employee_controlers.employee_update_Page);
router.get('/delete',secured,employee_controlers.employee_delete_Page);