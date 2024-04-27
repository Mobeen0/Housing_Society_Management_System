const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserId: { type: Number, required: true },
    FName: { type: String, required: true },
    LName: { type: String, required: true },
    UName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    user_type:{type: String}
});

const User = mongoose.model('User', userSchema,'User');

module.exports = User;
