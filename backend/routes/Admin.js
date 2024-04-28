router = require('express').Router();
const {addNotificationController} = require('../controllers/NotificationController');

router.post('/Notification',addNotificationController);

module.exports = router;