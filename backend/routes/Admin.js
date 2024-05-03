router = require('express').Router();
const {getTenants, getOwners} = require('../controllers/UserController');
const {addNotificationController} = require('../controllers/NotificationController');
const {addProperty} = require('../controllers/propertyController');

router.post('/Notification',addNotificationController);
router.get('/CheckTenants',getTenants)
router.get('/CheckResidents',getOwners);
router.post('/AddProperty',addProperty);

module.exports = router;