const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MONGO_URT', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log('Connection successfuly!')
}).catch((e)=>{
    console.log('Connection failed!')
})