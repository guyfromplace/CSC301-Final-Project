const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for pc_empire
const StorageSchema = new Schema({
    Manufacturer: String,
    Name: String,
    Type: String,
    Capacity: String,
    Speed: String,
    Interface: String,
    Protocol: String,
    Power: Number,
    Price: Number
});

//create model for pc_empire

const Storage = mongoose.model('Storage', StorageSchema,'Storage');

module.exports = Storage;