const express = require('express');
const router = express.Router();
const testController = require('../../controllers/testController');
const testLogin = require('../../controllers/loginController');

router.post('/', testController.testFunction);
router.post('/login', testLogin.testLogin);
router.post('/logout', testLogin.testLogout)

module.exports = router;