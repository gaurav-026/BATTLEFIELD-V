const express = require('express')
var cors = require('cors');
const fileUpload = require("express-fileupload"); 
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
//Use cors for intergration
app.use(cors({
    origin:"*"
}))

app.use(express.json());

//middleware for file upload
app.use(fileUpload(
    {
     useTempFiles : true,
     tempFileDir : '/tmp/'
    }
 ));

//import routes
const routes = require('./routes/Routes');

//mount the api
app.use('/api/v1', routes);

//start server
app.listen(PORT, ()=>{
    console.log(`SERVER STARTED SUCCESSFULLY AT PORT ${PORT}`);
})

//connect to db
const dbConnect = require('./config/database');
dbConnect();

//default route
app.get('/', (req, res)=>{
    res.send('This is Server Page');
})