const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const CPUSchema = new Schema({
  Manufacturer: String,
  Name: String,
  Cores: Number,
  Clock: String,
  Socket: String,
  Power: Number,
  Stock_Cooler: Boolean,
  Price: Number
});

//create model for pc_empire

const Cpu = mongoose.model('CPU', CPUSchema,'CPU');


module.exports = Cpu;
