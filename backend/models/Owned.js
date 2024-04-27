const mongoose = require('mongoose');

const ownedSchema = new mongoose.Schema({
    UName: { type: String, required: true },
    propertyId: { type: String, required: true },
    utilityStatus: { type: String, required: true }
},{ versionKey: false });

const Owned = mongoose.model('Owned', ownedSchema,'Owned');

module.exports = Owned;
