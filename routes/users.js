var express = require('express');
var router = express.Router();
const userController = require("../controller/user")

/* GET users listing. */
router.get('/', userController.index);

router.post("/", userController.create)

module.exports = router;
