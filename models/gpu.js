const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const GPUSchema = new Schema({
    Chipset_Manufacturer: String,
    Manufacturer: String,
    Name: String,
    Clock: Number,
    VRAM: Number,
    Interface: String,
    Power: Number,
    Price: Number
});

//create model for pc_empire

const Gpu = mongoose.model('GPU', GPUSchema,'GPU');

module.exports = Gpu;
