const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const PowerSupplySchema = new Schema({
    Manufacturer: String,
    Name: String,
    Power: Number,
    Efficiency_Rating: String,
    Price: Number
});

//create model for pc_empire

const Power_supply = mongoose.model('Power Supply', PowerSupplySchema,'Power Supply');

module.exports = Power_supply;

