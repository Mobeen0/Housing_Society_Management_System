router = require('express').Router();
const {verifyLogin} = require('../controllers/UserController');
const {getNotifications} = require('../controllers/NotificationController');
const {getOpenListings,getOwnedListings} = require('../controllers/propertyController');
const {addOwnedProperty} = require('../controllers/OwnedController');
const {addRentProperty} = require('../controllers/RentController');

router.get('/',verifyLogin);
router.get('/Notifications',getNotifications);
router.get('/Listings',getOpenListings);
router.get('/OwnListings',getOwnedListings);
router.post('/Buy',addOwnedProperty);
router.post('/Rent',addRentProperty);

module.exports = router;