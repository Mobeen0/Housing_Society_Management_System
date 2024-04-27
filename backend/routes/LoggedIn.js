router = require('express').Router();
const {verifyLogin} = require('../controllers/UserController');

router.get('/',verifyLogin);

module.exports = router;