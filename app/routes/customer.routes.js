// cara sebelumnya ========>

const customers = require('../controller/customer.controller')
module.exports = app => {
  // Create a new Customer
  app.get('/customer/create', customers.add)
  app.post('/customer/create', customers.create)

  // Retrieve all Customers
  app.get('/customers', customers.findAll)

  // Retrieve a single Customer with customerId
  app.get('/customers/:customerId', customers.findOne)

  // Update a Customer with customerId
  app.get('/customer/edit/:customerId', customers.edit)
  app.post('/customer/edit/:customerId', customers.update)

  // Delete a Customer with customerId
  app.get('/customer/delete/:customerId', customers.check)
  app.post('/customer/delete/:customerId', customers.delete)

  // Delete all Customers
  app.delete('/customers', customers.deleteAll)
}

// =========================================================
// const express = require('express')
// const router = express.Router()
// const customers = require('../controller/customer.controller')

// // Create a new Customer
// router.post('/customers', customers.create)

// // Retrieve all Customers
// router.get('/customers', customers.findAll)

// // Retrieve a single Customer with customerId
// router.get('/customers/:customerId', customers.findOne)

// // Update a Customer with customerId
// router.put('/customers/:customerId', customers.update)

// // Delete a Customer with customerId
// router.delete('/customers/:customerId', customers.delete)

// // Delete all Customers
// router.delete('/customers', customers.deleteAll)

// module.exports = router
