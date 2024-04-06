require('dotenv').config();
const express = require('express');

require('../db/db')

const Customer = require('./Customer');

const app = express()
const port = 5000
app.use(express.json());

app.post('/customer' ,(req , res)=>{
    const newCustomer = new Customer({...req.body})
    newCustomer.save().then(()=>{
        res.send('New customer created successfuly!');
    }).catch((err) =>{
        res.status(500).send('Interval Serve Error!')
    })
})

app.get('/customers' ,  (req , res)=>{
    Customer.find().then((customers)=>{
        if (customers) {
            res.json(books)
        }else{
            res.status(404).send('customers not found');
        }
    }).catch((err)=>{
        res.status(500).send('Internal Server Error !')
    })
})

app.get('/customer/:id' , (req , res)=>{
    Customer.findById(req.params.id).then((customer)=>{
        if (customer) {
            res.json(customer)
        }else{
            res.status(404).send('customer not found');
        }
    }).catch((err)=>{
        res.status(500).send('Internal Server Error !')
    })
})

app.delete('/customer/:id' , (req , res)=>{
    Customer.findOneAndRemove(req.params.id).then((customer)=>{
        if (book) {
            res.json('customer deleted Successfuly ! ')
        }else{
            res.status(404).send('customer not found');
        }
    }).catch((err)=>{
        res.status(500).send('Internal Server Error !')
    })
})
app.listen(port , ()=>{
    console.log(`Up and Running on port ${port} - this is customer service`)
})