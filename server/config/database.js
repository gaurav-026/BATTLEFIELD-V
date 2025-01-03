
const { error } = require('console');
const mongoose = require('mongoose');
require('dotenv').config();


const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(()=>{
        console.log('DB CONNECTION IS SUCCESSFULL!')
    })
    .catch((error)=>{
        console.log('ISSUES IN DB CONNECTION')
        console.log(error.message)
        process.exit(1);
    })
}

module.exports = dbConnect;