var express = require('express');
var router = express.Router();
const contractsController = require("../controller/contracts")
const isLoggedIn = require("../config/auth");

/* GET contracts listing. */
router.get('/', contractsController.index);
router.get("/new", isLoggedIn, contractsController.new)
router.post("/", contractsController.create)
router.delete("/:id", isLoggedIn, contractsController.delete)
router.put("/:id", isLoggedIn, contractsController.update)


module.exports = router;