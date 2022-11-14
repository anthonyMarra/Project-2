var express = require('express');
var router = express.Router();
const userController = require("../controller/user")
const isLoggedIn = require("../config/auth");


router.put("/update/:id", isLoggedIn, userController.update)

module.exports = router;
