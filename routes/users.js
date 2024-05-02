var express = require("express");
const { getAllUser } = require("../controller/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", getAllUser);

module.exports = router;
