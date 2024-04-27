router = require('express').Router();
const {signUpUser} = require('../controllers/UserController');

router.post('/',signUpUser);

module.exports = router;