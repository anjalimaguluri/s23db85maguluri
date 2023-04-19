var express = require('express');
const employee_controlers= require('../controllers/employee');
var router = express.Router();
/* GET employees */
router.get('/', employee_controlers.employee_view_all_Page );
module.exports = router;

router.get('/detail', employee_controlers.employee_view_one_Page);
router.get('/create',employee_controlers.employee_create_Page);
router.get('/update',employee_controlers.employee_update_Page);
router.get('/delete',employee_controlers.employee_delete_Page);

// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('employee', { title: 'Search Results'});
// });

// module.exports = router;