var express = require("express");
const {
  getAllBenda,
  createBenda,
  getBendaByCode,
} = require("../controller/bendaControler");
var router = express.Router();

router.get("/", getAllBenda);
router.get("/:code", getBendaByCode);
router.post("/create", createBenda);

module.exports = router;
