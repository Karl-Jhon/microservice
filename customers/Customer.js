const mongoose = require('mongoose');
const CustomerShema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    age : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    }
})
const Customer = mongoose.model('customer' , CustomerShema)

module.exports = Customer;