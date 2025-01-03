const { url } = require("inspector");
const mongoose = require("mongoose");


const serverSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    map:{
        type: String,
        required: true,
    },
    region:{
        type: String,
        required: true,
    },
    mode:{
        type: String,
        required: true,
    },
    ticketRate:{
        type: Number,
        required: true,
    },
    players:{
        type: Number,
        required: true,
    },
    ping:{
        type: Number,
        required: true,
    },
    imageUrl:{
        type: String,
        required:true,
    },
    countryImgUrl:{
        type: String,
        required: true,
    },
    serverDetails:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    setting: [],
    advanced: [],
    rules: [],


})
module.exports = mongoose.model('ServerSchema', serverSchema);
