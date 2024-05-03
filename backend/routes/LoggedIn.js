router = require('express').Router();
const {verifyLogin} = require('../controllers/UserController');
const {getNotifications} = require('../controllers/NotificationController');
const {getOpenListings,getOwnedListings} = require('../controllers/propertyController');

router.get('/',verifyLogin);
router.get('/Notifications',getNotifications);
router.get('/Listings',getOpenListings);
router.get('/OwnListings',getOwnedListings);

module.exports = router;