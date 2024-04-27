const mongoose = require('mongoose');

const gasBillSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    propertyId: { type: String, required: true },
    month: { type: String, required: true }
},{ versionKey: false });

const GasBill = mongoose.model('GasBill', gasBillSchema,'GasBill');

module.exports = GasBill;
