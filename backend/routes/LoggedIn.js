router = require('express').Router();
const {verifyLogin} = require('../controllers/UserController');
const {getNotifications} = require('../controllers/NotificationController');

router.get('/',verifyLogin);
router.get('/Notifications',getNotifications);

module.exports = router;