var express = require('express');
var router = express.Router();
const contractsController = require("../controller/contracts")

/* GET contractss listing. */
router.get('/', contractsController.index);

router.post("/", contractsController.create)

module.exports = router;
