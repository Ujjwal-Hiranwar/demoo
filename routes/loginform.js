const express = require('express')
const router = express.Router();
const loginController = require('../controllers/loginform')
router.route("/index").get(loginController.sendLogin);
router.route("/senddata").post(loginController.sendDataToDataBase)
router.route("/submit").get(loginController.sendResponse)
module.exports = router;