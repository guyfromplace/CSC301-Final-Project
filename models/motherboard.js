const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const MoboSchema = new Schema({
    Manufacturer: String,
    Name: String,
    CPU_Socket: String,
    CPU_Chipset: String,
    RAM: String,
    RAM_Slots: Number,
    Form_Factor:String,
    PCIE:String,
    SATA3:Number,
   // Mdot2:Number,
    Wifi: Boolean,
    Price: Number
});

//create model for pc_empire

const Motherboard = mongoose.model('Motherboard', MoboSchema,'Motherboard');


module.exports = Motherboard;
