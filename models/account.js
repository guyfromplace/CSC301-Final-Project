const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const AccountSchema = new Schema({
    Name: String,
    Username: String,
    Password: String,
    Comments: Array,
    Builds: Array,
    Reviews: Array,
},{
    versionKey: false // You should be aware of the outcome after set to false
});

//create model for pc_empire

const Account = mongoose.model('Accounts', AccountSchema,'Accounts');

module.exports = Account;
