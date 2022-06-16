const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const CaseSchema = new Schema({
    Manufacturer: String,
    Name: String,
    Color: String,
    Form_Factor: String,
    //USB3Dot0Slots: Boolean,
    Price: Number
});

//create model for pc_empire

const Case = mongoose.model('Case', CaseSchema,'Case');

module.exports = Case;