const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    cardNum: { type: String, required: true },
    cvc: { type: String, required: true },
    expdate: { type: String, required: true },
    UName: { type: String, required: true }
},{ versionKey: false });

const Payment = mongoose.model('Payment', paymentSchema, 'Payment');

module.exports = Payment;
