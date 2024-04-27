const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    propertyID: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    size: { type: String, required: true }
});

const List = mongoose.model('List', listSchema,'List');

module.exports = List;
