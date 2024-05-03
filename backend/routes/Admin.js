router = require('express').Router();
const {getTenants, getOwners} = require('../controllers/UserController');
const {addNotificationController} = require('../controllers/NotificationController');

router.post('/Notification',addNotificationController);
router.get('/CheckTenants',getTenants)
router.get('/CheckResidents',getOwners);

module.exports = router;