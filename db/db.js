const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URT , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModifier : false,
    useCreateIndex: true
}).then(()=>{
    console.log('Connection successfuly!')
}).catch((e)=>{
    console.log('Connection failed!')
})