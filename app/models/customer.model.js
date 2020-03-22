const sql = require('./db.js')

// constructor
const Customer = function (customer) {
  this.name = customer.name
  this.email = customer.email
  this.phone_no = customer.phone_no
  this.active = customer.active
}

// create a new Customer
Customer.create = (newCustomer, result) => {
  sql.query('INSERT INTO customers SET ?', newCustomer, (err, res) => {
    if (err) {
      console.log(`error: ${err}`)
      result(err, null)
      return
    }

    console.log('created customer: ', { id: res.insertId, ...newCustomer })
    result(null, { id: res.insertId, ...newCustomer })
  })
}

// find a Customer by Id
Customer.findById = (customerId, result) => {
  sql.query('SELECT * FROM customers WHERE id =' + customerId, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }

    if (res.length) {
      console.log('found customer: ', res[0])
      result(null, res[0])
      return
    }

    // not found Customer with the id
    result({ kind: 'not_found' }, null)
  })
}

// get all Customer
Customer.getAll = result => {
  sql.query('SELECT * FROM customers', (err, res) => {
    if (err) {
      console.log('error', err)
      result(null, err)
      return
    }

    console.log('Customers: ', res)
    result(null, res)
  })
}

// update a Customer by Id
Customer.updateById = (id, customer, result) => {

  let active = true
  if (customer.active === 'false') active = false


  sql.query(
    'UPDATE customers SET name = ?, email = ?, phone_no = ?, active = ? WHERE id = ?',
    [customer.name, customer.email, customer.phone_no, active, id],
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: 'not_found' }, null)
        return
      }

      console.log('updated customer: ', { id: id, ...customer })
      result(null, { id: id, ...customer })
    }
  )
}

// remove a Customer by Id
Customer.remove = (id, result) => {
  sql.query('DELETE FROM customers WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: 'not_found' }, null)
      return
    }

    console.log('deleted customer with id: ', id)
    result(null, res)
  })
}

// remove all Customer
Customer.removeAll = result => {
  sql.query('DELETE FROM customers', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    console.log(`deleted ${res.affectedRows} customers`)
    result(null, res)
  })
}

module.exports = Customer
