# Customer API

### In this App, we need 3 dependencies below:

- Express
- Body Parser
- MySQL (mysql driver for node.js)

### Quick Start

```bash
# Install dependencies
$ npm install

# Database

$ node_crud.sql

# Start App

$ node server.js

App Run On: http://localhost:3000

```

### Test the APIs

```bash
Server is running on port 3000.
Successfully connected to the database.
```

#### Using Postman, we’re gonna test all the Apis above.

1. Create a new Customer using POST /customers Api
   ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/1.png)

   - After create a customer
     ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/1a.png)

   - After creating some new Customers, we can check MySQL table:
     ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/1b.png)

2. Retrieve all Customers using GET /customers Api
   ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/2.png)

3. Retrieve a single Customer by id using GET /customers/:customerId Api
   ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/3.png)

4. Update a Customer using PUT /customers/:customerId Api
   ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/4.png)

   - Check customers table after a row was updated:
     ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/4a.png)

5. Delete a Customer using DELETE /customers/:customerId Api
   ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/5.png)

   - Customer with id=2 was removed from customers table:
     ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/5a.png)

6. Delete all Customers using DELETE /customers Api
   ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/6.png)

   - Now there are no rows in customers table:
     ![alt text](https://github.com/khairul-abdi/customer-API/blob/master/img/6a.png)
