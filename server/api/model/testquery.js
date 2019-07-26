const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    work: {
        type: String
    },
    contact: {
        type: Number
    },
    email:{
        type:String
    },
    Starting:{
        type: String
    },
    Destination:{
        type: String
    }
    },
);
module.exports = mongoose.model('User', user); 