const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    notiContent: { type: String, required: true },
    userType: { type: String, required: true },
    date: { type: Date, required: true },
    notiHeading: { type: String, required: true}
},{ versionKey: false });

const Notifications = mongoose.model('Notifications', notificationSchema,'Notifications');

module.exports = Notifications;
