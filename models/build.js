const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const BuildSchema = new Schema({
    Owner: String,
    Build_Name: String,
    CPU: String,
    Case: String,
    GPU: Array,
    Motherboard: String,
    PS: String,
    RAM: Array,
    Storage: Array,
    Reviews: Array,
    Comments: Array
});

//create model for pc_empire

const Build = mongoose.model('Builds', BuildSchema,'Builds');

module.exports = Build;
