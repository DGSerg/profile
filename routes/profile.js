const express = require('express');
const controller = require('../controllers/profile');
const passport = require('passport');
const router = express.Router();


router.get('/', passport.authenticate('jwt',{session: false}), controller.get);
router.post('/', passport.authenticate('jwt',{session: false}), controller.create);



module.exports = router;