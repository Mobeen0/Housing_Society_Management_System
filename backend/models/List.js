const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    propertyID: { type: Number, required: true },
    propertyName: {type: String, required: true},
    description: { type: String, required: true },
    location: { type: String, required: true },
    size: { type: String, required: true }
},{ versionKey: false });

const List = mongoose.model('List', listSchema,'List');

module.exports = List;
