require("dotenv") - config();
const express = require( 'express');
const mongoose = require ("mongoose");
const axios = require('axios');

// Connect
require(' ../db/db');
const Order = require('•/Order');
const app = express;
const port = 9000;
app.use(express.json())
app.post('/order', (req, res) => {
     const neworder = new Order ({
     customerID: mongoose. Types.Objectid(req.body.customerID),
     bookID: mongoose. Types.objectid(req.body.bookID),
     initialdate: req.body.initialDate,
     deliveryDate: req. body-deliveryDate
    })
});
    
    
neworder. save().then(() => {
    res. send ('New order added successfully!')
}).catch ((err) => {
    res.status(500).send('Internal Server Error!');
})



app.get ('/orders', (req, res) => {
    Order.find().then((orders) => {
        if (orders) {
            res.json(orders)
        } else {
            res.status(404).send ('Orders not found')
        }    
    }).catch((err) => {
        res. status(500).send('Internal Server Error!');
    });    
})
        


app.get('/order/:id', (req, res) => {
    Order.findById(req.params.id). then((order) => {
        if (order) {
            axios.get('http://localhost:5000/customer/${order.customerID}').then((response) => {
            let orderobject = {
                CustomerName: response.data. name,
                BookTitle:''
            }
            axios.get('http://localhost:3000/book/${order.bookID}').then((response) => {
                orderObject.BookTitle = response.data.title
                res.json (orderobject);
            })
        })
        } else {
            res.status(404).send('orders not found');
        }}).catch((err) => {
            res. status(500).send ('Internal Server Error!');
        })
})
app.listen (port, () => {
    console. log('Up and Running on port $port} - This is order service');
})
        