var employee = require('../models/employee');
// List of all employees
exports.employee_list = function(req, res) {
 res.send('NOT IMPLEMENTED: employee list');
};
// for a specific employee.
exports.employee_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: employee detail: ' + req.params.id);
};
// Handle employee create on POST.

// Handle employee create on POST.
exports.employee_create_post = async function(req, res) {
    console.log(req.body)
    let document = new employee();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"employee_type":"goat", "cost":12, "size":"large"}
    document.employee_Name = req.body.employee_Name;
    document.employee_age = req.body.employee_age;
    document.employee_salary = req.body.employee_salary;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// exports.employee_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: employee create POST');
// };
// Handle employee delete form on DELETE.
exports.employee_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: employee delete DELETE ' + req.params.id);
};
// Handle employee update form on PUT.
exports.employee_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: employee update PUT' + req.params.id);
};

//List of all employees
exports.employee_list = async function(req, res) {
try{
    theemployees = await employee.find();
    res.send(theemployees);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.employee_view_all_Page = async function(req, res) {
    try{
    theemployee = await employee.find();
    res.render('employee', { title: 'employee Search Results', results: theemployee });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   