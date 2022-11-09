var express = require('express');
var router = express.Router();
const contractsController = require("../controller/contracts")
const isLoggedIn = require("../config/auth");

/* GET contracts listing. */
router.get('/', contractsController.index);
router.get("/new", isLoggedIn, contractsController.new)
router.post("/", contractsController.create)


module.exports = router;