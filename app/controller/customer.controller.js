const Customer = require('../models/customer.model')

// Create and Save a new Customer
exports.add = (req, res) => {
  res.render('customer/create', { page: 'Create User' })
}

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty'
    })
  }

  let active = true;
  if (req.body.active === 'false') active = false

  // Create a Customer
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    phone_no: req.body.phone_no,
    // active: req.body.active
    // active: false
    active
  })

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occured while creating the Customer.'
      })
    } else {
      // res.send(data)
      res.redirect('/customers')
    }
  })
}

// Retrieve all Customers from the database
exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving customers.'
      })
    } else {
      // res.send(data)
      res.render('customer/index', { page: 'All Customers', data })
    }
  })
}

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}`
        })
      } else {
        res.status(500).send({
          message: 'Error retrieving Customer with id' + req.params.customerId
        })
      }
    } else {
      res.send(data)
    }
  })
}

// // Update a Customer identified by the customerId in the request
exports.edit = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}`
        })
      } else {
        res.status(500).send({
          message: 'Error retrieving Customer with id' + req.params.customerId
        })
      }
    } else {
      // res.send(data)
      res.render('customer/edit', { page: 'Edit Customer', data })
    }
  })
}

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
  }

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}`
          })
        } else {
          res.status(500).send({
            message:
              'Could not delete Customer with id ' + req.params.customerId
          })
        }
      } else {
        // res.send(data)
        res.redirect('/customers')
      }
    }
  )
}

// Delete a Customer with the specified customerId in the request
exports.check = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}`
        })
      } else {
        res.status(500).send({
          message: 'Error retrieving Customer with id' + req.params.customerId
        })
      }
    } else {
      // res.send(data)
      res.render('customer/delete', { page: 'Delete Customer', data })
    }
  })
}

exports.delete = (req, res) => {
  Customer.remove(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        })
      } else {
        res.status(500).send({
          message: 'Could not delete Customer with id ' + req.params.customerId
        })
      }
    } else {
      // res.send({
      //   message: `Customer was deleted successfully`
      // })
      res.redirect('/customers')
    }
  })
}

// Delete all Customers from the database
exports.deleteAll = (req, res) => {
  Customer.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all customers.'
      })
    } else {
      res.send({
        message: `All Customers were deleted successfully!`
      })
    }
  })
}
