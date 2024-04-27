const mongoose = require('mongoose');

const electricBillSchema = new mongoose.Schema({
    unit: { type: Number, required: true },
    price: { type: Number, required: true },
    propId: { type: String, required: true },
    month: { type: String, required: true }
});

const ElectricBill = mongoose.model('ElectricBill', electricBillSchema,'ElectricBill');

module.exports = ElectricBill;
