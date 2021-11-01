const EmployeeModel = require('../models/employee.model')

// Get all employees
exports.getEmployeeList = (req, res) => {
  //? console.log('those are all the employees in our database')
  EmployeeModel.getAllEmployees((err, employees) => {
    console.log('we r here')
    if(err)
    res.send(err)
    console.log('Employees', employees)
    res.send(employees)
  })
}

// Get employee by id
exports.getEmployeeByID = (req, res) => {
  //? console.log('get employee by id')
  EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
    if(err)
    res.send(err)
    console.log('single employee data', employee)
    res.send(employee)
  })
}

// Create new employee
exports.createNewEmployee = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body)
  console.log('employeeReqData', employeeReqData)
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  } else {
    EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
      if(err)
      res.send(err)
      res.json({status: true, message: 'Employee created successfully', data: employee.insertId})
    })
  }
}

// Update employee
exports.updateEmployee = (req, res)=>{
  const employeeReqData = new EmployeeModel(req.body);
  console.log('employeeReqData update', employeeReqData);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.send(400).send({success: false, message: 'Please fill all fields'});
  }else{
    EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
      if(err)
      res.send(err);
      res.json({status: true, message: 'Employee updated Successfully'})
    })
  }
}

// delete employee
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
    if(err)
    res.send(err)
    res.json({success: true, message: 'Employee deleted successfully'})
  })
}