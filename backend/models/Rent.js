const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    UName: { type: String, required: true },
    propertyId: { type: Number, required: true }
},{ versionKey: false });

const Rent = mongoose.model('Rent', rentSchema,'Rent');

module.exports = Rent;
