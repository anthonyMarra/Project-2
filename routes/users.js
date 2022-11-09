var express = require('express');
var router = express.Router();
const userController = require("../controller/user")
const isLoggedIn = require("../config/auth");

/* GET users listing. */
router.get('/', isLoggedIn, userController.index);

router.post("/", isLoggedIn, userController.create)

module.exports = router;
